export const getOptimizedImages = (isMobile, media) => {
    const getLargeImages = () => {
      return media.filter(
        (image) =>
          image.size !== "small" &&
          image.size !== "very_small" &&
          image.size !== "medium_small" &&
          image.size !== "thumbnail"
      );
    };
    const getAllSmallImages = () => {
      return media.filter(
        (image) =>
          image.size === "small" ||
          image.size === "very_small" ||
          image.size === "medium_small" ||
          image.size === "thumbnail"
      );
    };
    const getSmallImage = () => {
      return media.filter((image) => image.size === "small");
    };
    if (media.length) {
      if (isMobile) {
        if (getSmallImage().length) {
          return getSmallImage();
        } else {
          return getLargeImages();
        }
      } else {
        if (getLargeImages().length) {
          return getLargeImages();
        } else {
          return getAllSmallImages();
        }
      }
    } else {
      return [];
    }
  };