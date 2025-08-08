import { FunctionComponent, Attributes } from 'preact';

interface SrcsetImageProps extends Attributes {
  baseUrl: string;
  src?: string;
  alt?: string; 
  className?: string;
}

const resolutions = [180, 320, 768, 1120, 1920]; 
const sizes = '(max-width: 768px) 100vw, 1120px'; 

const createSrcsetString = (imageUrl: string): string | undefined => {
  if (!imageUrl) return undefined;

  
  const normalizedImageUrl = imageUrl.replace(/\\/g, '/');

  const lastSlashIndex = normalizedImageUrl.lastIndexOf('/');
  let baseUrl = '';
  let filenameWithExt = normalizedImageUrl;

  if (lastSlashIndex !== -1) {
    baseUrl = normalizedImageUrl.substring(0, lastSlashIndex);
    filenameWithExt = normalizedImageUrl.substring(lastSlashIndex + 1);
  }

  const filenameParts = filenameWithExt.split('.');
  const filename = filenameParts[0];
  const ext = filenameParts.slice(1).join('.'); 
  const srcsetImagesFolder = `${filename}-srcset-images`;

  const srcset = resolutions.map(res => {
    const srcsetImagePath = baseUrl ? `${baseUrl}/${srcsetImagesFolder}/${filename}-${res}w.${ext}` : `${srcsetImagesFolder}/${filename}-${res}w.${ext}`;
    return `${srcsetImagePath} ${res}w`;
  }).join(', ');
  return srcset;
};

export const SrcsetImage: FunctionComponent<SrcsetImageProps> = ({
  baseUrl,
  src, 
  ...props 
}) => {
  const srcset = createSrcsetString(baseUrl || src || ''); 

  return (
    <img
      src={src || baseUrl} 
      {...(srcset ? { srcset: srcset, sizes: sizes } : {})}
      {...props}
    />
  );
};
