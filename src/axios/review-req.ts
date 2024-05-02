import axios from "axios";

export interface ReviewProps {
  _id: string;
  productHandle: string;
  author: string;
  rating: number;
  review: string;
  title: string;
  isVerified: boolean;
  createdAt: string;
  id: string;
}

export interface ReviewsProps {
  reviews: ReviewProps[];
}

export interface ReviewDataProps {
  data: ReviewsProps;
}

export interface AverageRatingProps {
  productHandle: string;
  averageRating: number;
  totalReviews: number;
  _id: string;
}

export interface CreateReviewProps {
  rating: 0;
  review: string;
  title: string;
  author: string;
  productHandle: string;
}

export const postReview = async (data: CreateReviewProps) => {
  try {
    const res = await axios.post<CreateReviewProps>("/api/reviews", data);
    console.log("post review", res);
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviewStats = async (handle: string) => {
  try {
    const response = await axios.get(`/api/reviews`);
    console.log("review", response);
    const hel = response.data.data.reviewStats.filter(
      (review: AverageRatingProps) => review.productHandle === handle
    );
    console.log("hel review", hel)
    return hel
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async (handle: string) => {
  try {
    const response = await axios.get<ReviewDataProps>(`/api/reviews`);
    return response.data.data.reviews.filter(
      (review: ReviewProps) => review.productHandle === handle
    );
  } catch (error) {
    console.log(error);
  }
};
