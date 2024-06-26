"use client";

import { useEffect, useState } from "react";
import { useReviewStatsQuery } from "@/hooks/useQueryHooks";
import Rating from "@mui/material/Rating";

export default function TheAverageRating({
  productHandle,
}: {
  productHandle: string;
}) {
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const {
    data: filteredReviewsStats,
    isError,
    isLoading,
  } = useReviewStatsQuery(productHandle);

  useEffect(() => {
    if (filteredReviewsStats?.length > 0) {
      const stats = filteredReviewsStats[0].stats;
      setAverageRating(stats?.averageRating);
      setTotalReviews(stats?.totalReviews);
    }
  }, [filteredReviewsStats]);

  const renderRatingStars = () => {
    if (averageRating > 0) {
      return (
        <Rating
          name="read-only"
          precision={0.5}
          size="small"
          value={averageRating}
          readOnly
          style={{ color: "black" }}
        />
      );
    } else {
      return (
        <Rating
          name="read-only"
          precision={0.5}
          size="small"
          value={0}
          readOnly
          color="black"
          style={{ color: "black" }}
        />
      );
    }
  };

  return (
    <div className="flex justify-center xl:justify-start items-center gap-2">
      {renderRatingStars()}
      <p className="text-sm font-light">{totalReviews} recensioner</p>
    </div>
  );
}
