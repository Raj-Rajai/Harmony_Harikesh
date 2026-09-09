import { NextResponse } from 'next/server';

const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScmIrGJxyBO2pZnn6SlbWSJ6S0Hd-SGUWCxS8aeN2qN37Z00Q/formResponse';

const ENTRY_IDS = {
  name: 'entry.1904780135',
  phone: 'entry.967002311',
  email: 'entry.223022410',
  interest: 'entry.1470575216',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, interest } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Full Name is required.' },
        { status: 400 }
      );
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Phone Number is required.' },
        { status: 400 }
      );
    }
    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email Address is required.' },
        { status: 400 }
      );
    }

    const params = new URLSearchParams();
    params.append(ENTRY_IDS.name, name.trim());
    params.append(ENTRY_IDS.phone, phone.trim());
    params.append(ENTRY_IDS.email, email.trim());
    if (interest && typeof interest === 'string' && interest.trim()) {
      params.append(ENTRY_IDS.interest, interest.trim());
    }

    const response = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (
      response.ok ||
      response.status === 200 ||
      response.status === 302 ||
      response.status === 303
    ) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      {
        success: false,
        error:
          'Unable to submit enquiry at this time. Please try again or contact our private sales desk directly.',
      },
      { status: response.status || 500 }
    );
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Network error. Please check your connection and try again.',
      },
      { status: 500 }
    );
  }
}
