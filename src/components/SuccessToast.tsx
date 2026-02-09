import { CheckCircle2, X } from 'lucide-react';
import { useState } from 'react';

export default function SuccessToast() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-white rounded-lg shadow-lg border border-green-200 p-4 flex items-start gap-3 max-w-md">
        <div className="shrink-0">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        </div>
        <div className="flex-1 pt-0.5">
          <h4 className="font-semibold text-gray-900 mb-1">Application Submitted Successfully!</h4>
          <p className="text-sm text-gray-600">
            Your application has been received. We'll review it and get back to you soon.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
