import { SiAmericanexpress } from "react-icons/si";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
} from "react-icons/fa";
import { useShopQuery } from "@/hooks/useQueryHooks";

export default function ThePaymentMethods() {
  const { data: paymentData, isError, isLoading } = useShopQuery();

  const acceptedCards: string[] =
    paymentData?.data.shop?.paymentSettings?.acceptedCardBrands;

  const acceptedDigitalCards: string[] =
    paymentData?.data.shop?.paymentSettings?.supportedDigitalWallets;

  const cardIcons = {
    VISA: <FaCcVisa size={30} />,
    MASTERCARD: <FaCcMastercard size={30} />,
    AMERICAN_EXPRESS: <SiAmericanexpress size={25} />,
  };
  const digitalCardIcons = {
    APPLE_PAY: <FaCcApplePay size={30} />,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading payment methods</div>;
  }

  console.log("pay", paymentData);
  return (
    <ul className="flex flex-row items-center gap-3 pb-5">
      {acceptedCards &&
        acceptedCards.map((card: any) => cardIcons[card] || null)}
      {acceptedDigitalCards &&
        acceptedDigitalCards.map((card: any) => digitalCardIcons[card] || null)}
    </ul>
  );
}
