export const useStarRating = () => {
  const ratingData = new Array(12334).fill(4);

  // Kalkulasi rata-rata rating
  const ratingSum = ratingData.reduce((total, rating) => total + rating, 0);
  const ratingAvg = ratingSum / ratingData.length;

  // Konversi nilai rata-rata rating menjadi nilai bintang
  const starRating = Math.round(ratingAvg);

  // Batasi nilai bintang antara 1 dan 5
  const finalRating = Math.min(Math.max(starRating, 1), 5);

  return finalRating;
};
