'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface CloudinaryUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export default function CloudinaryUpload({ value, onChange }: CloudinaryUploadProps) {
  return (
    <div className="space-y-3">
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onSuccess={(result) => {
          if (result.info && typeof result.info === 'object' && 'secure_url' in result.info) {
            onChange(result.info.secure_url as string);
          }
        }}
      >
        {({ open }) => (
          <Button type="button" variant="outline" size="sm" onClick={() => open()}>
            {value ? 'Change cover image' : 'Upload cover image'}
          </Button>
        )}
      </CldUploadWidget>

      {value && (
        <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-lg border border-border">
          <Image src={value} alt="Cover preview" fill className="object-cover" />
        </div>
      )}
    </div>
  );
}
