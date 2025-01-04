import React from 'react';
import { RiMapPin2Fill, RiWalletFill, RiArrowRightUpFill, RiMailFill, RiShieldCheckFill, RiPhoneFill } from "@remixicon/react";


export interface ProfileProps {
  avatar: string;
  name: string;
  phone: string;
  location: string;
  wallet: string;
  email: string;
  type: "public" | "private";
  registryDate: Date;


}

/** Primary UI component for user interaction */
export const Profile = ({
  avatar,
  name,
  phone,
  location,
  wallet,
  email,
  type,
  registryDate,
  ...props
}: ProfileProps) => {
  const truncateWallet = (wallet: string) => {
    if (wallet.length <= 8) return wallet;
    return `${wallet.slice(0, 5)}...${wallet.slice(-3)}`;
  };




  return (
    <div className="w-[358px] h-auto flex flex-col items-center justify-center gap-4">
      <div className="w-[188px] h-[188px] bg-[#e2e4e9] rounded-full flex items-center justify-center">
        <img className="w-[188px] h-[188px] rounded-full" src={avatar} />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-2">
        <div className="self-stretch text-center text-text-strong-950 text-title-h4">{name}</div>
        <div className="flex flex-col h-auto items-center justify-center gap-1.5 self-stretch">
          <div className="flex items-center justify-center gap-2">
            <RiMapPin2Fill className="h-4 w-4 text-primary-base" />
            <div className="text-label-md text-text-strong-950">{location}</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <RiWalletFill className="h-4 w-4 text-primary-base" />
            <div className="flex items-center justify-center">
              <div className="text-label-md text-text-strong-950">{truncateWallet(wallet)}</div>
              <RiArrowRightUpFill className="h-4 w-4 text-text-sub-600" />
            </div>
          </div>
          {type === "public" && (
            <>
              <div className="flex items-center justify-center gap-2">
                <RiMailFill className="h-4 w-4 text-primary-base" />
                <div className="flex items-center justify-center">
                  <div className="text-label-md text-text-strong-950">{email}</div>
                </div>
              </div>
              <div className="flex h-6 items-center justify-center gap-2">
                <RiPhoneFill className="h-4 w-4 text-primary-base" />
                <div className="flex items-center justify-center">
                  <div className="text-label-md text-text-strong-950">{phone}</div>
                </div>
              </div>
            </>
          )}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1">
              <RiShieldCheckFill className="h-4 w-4 text-primary-base" />
              <div className="text-label-md text-text-strong-950">
                Registered: {registryDate.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};