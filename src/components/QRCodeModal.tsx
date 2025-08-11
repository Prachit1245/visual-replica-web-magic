
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const QRCodeModal = ({ isOpen, onClose, title }: QRCodeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-900">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Scan the QR code below to make your payment
            </p>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/b42b406d-cee4-40eb-8473-3db4256135dc.png" 
                alt="Payment QR Code" 
                className="w-64 h-64 object-contain border border-gray-200 rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Use any UPI app to scan and pay
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              onClick={onClose} 
              variant="outline" 
              className="px-6 py-2"
            >
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeModal;
