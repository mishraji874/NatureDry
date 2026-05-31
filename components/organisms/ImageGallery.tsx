"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

export interface GalleryImage {
  id: string;
  url: string;
  altText: string;
  isPrimary?: boolean;
}

export interface ImageGalleryProps {
  images: GalleryImage[];
  productName?: string;
  onImageSelect?: (imageId: string) => void;
}

export function ImageGallery({
  images,
  productName = "Product",
  onImageSelect,
}: ImageGalleryProps) {
  const [activeImageId, setActiveImageId] = useState(images[0]?.id ?? "");

  const activeImage = useMemo(() => {
    return images.find((img) => img.id === activeImageId) ?? images[0];
  }, [activeImageId, images]);

  const handleImageSelect = (imageId: string) => {
    setActiveImageId(imageId);
    onImageSelect?.(imageId);
  };

  if (images.length === 0) {
    return (
      <div className={styles.gallery}>
        <div className={styles.mainImageWrapper}>
          <div className={styles.imageFallback}>No images available</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      {/* Main Image */}
      <div className={styles.mainImageWrapper}>
        {activeImage ? (
          <Image
            src={activeImage.url}
            alt={activeImage.altText}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className={styles.mainImage}
            priority
          />
        ) : (
          <div className={styles.imageFallback}>No image selected</div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className={styles.thumbnailStrip}>
          {images.map((image) => (
            <button
              key={image.id}
              type="button"
              className={`${styles.thumbnailButton} ${
                image.id === activeImage?.id ? styles.thumbnailButtonActive : ""
              }`}
              onClick={() => handleImageSelect(image.id)}
              aria-label={`View ${image.altText}`}
              aria-current={image.id === activeImage?.id ? "true" : "false"}
            >
              <Image
                src={image.url}
                alt={image.altText}
                fill
                sizes="96px"
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
