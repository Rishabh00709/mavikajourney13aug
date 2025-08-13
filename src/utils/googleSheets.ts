export interface FormData {
  name: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  travelers?: string;
  budget?: string;
  formType: 'contact' | 'callback' | 'package-inquiry';
  packageName?: string;
  timestamp?: string;
}

// You need to replace this with your own Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

export const submitToGoogleSheets = async (data: FormData): Promise<boolean> => {
  try {
    console.log('📊 Submitting form data to Google Sheets:', {
      formType: data.formType,
      name: data.name,
      phone: data.phone,
      timestamp: new Date().toISOString()
    });
    
    // Add timestamp
    const submissionData = {
      ...data,
      timestamp: new Date().toISOString()
    };

    // Try with CORS first
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('✅ Google Sheets response status:', response.status);
      
      if (response.ok) {
        const result = await response.text();
        console.log('✅ Data successfully sent to Google Sheets:', result);
        return true;
      }
    } catch (corsError) {
      console.log('⚠️ CORS failed, trying with no-cors mode:', corsError);
      
      // Fallback to no-cors mode
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });
      
      console.log('✅ Data sent to Google Sheets with no-cors mode');
      return true;
    }

    return false;
  } catch (error) {
    console.error('❌ Error submitting to Google Sheets:', error);
    return false;
  }
};

// Alternative method using form data
export const submitToGoogleSheetsFormData = async (data: FormData): Promise<boolean> => {
  try {
    console.log('Submitting with FormData method:', data);
    
    const formData = new FormData();
    
    // Add all fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });
    
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData
    });

    console.log('FormData response status:', response.status);
    return response.ok;
  } catch (error) {
    console.error('Error with FormData method:', error);
    return false;
  }
};