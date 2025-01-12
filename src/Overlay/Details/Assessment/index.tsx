import React from "react";
import {
  RiCloseLine,
  RiCloudLine,
  RiLeafFill,
  RiSeedlingLine,
  RiTreeFill,
  RiTreeLine,
} from "@remixicon/react";
import { Root } from "./Base";
import {
  formatDate,
  formatTime,
  formatDateTime,
} from "../../../utils/date-time-formater";

export interface Specie {
  name: string;
  image: string;
  type: string;
  // scientificName: string;
  // family: string;
  // genus: string;
  // order: string;
  // phylum: string;
  // kingdom: string;
  // class: string;
  // conservationStatus: string;
  // description: string;
  // habitat: string;
  // diet: string;
  // reproduction: string;
  // size: string;
  // weight: string;
  // lifespan: string;
  // video: string;
  // audio: string;
  // tags: string[];
  // issues: string[];
  // medias: string[];
  // assessments: string[];
}

export interface AssessmentDetailsProps {
  issues: string[];
  tags: string[];
  species: Specie[];
  medias: string[];
  assessmentData: string[];
  publishedDate: Date;
  remoteReport: string;
  onClose?: () => void;
}

/** Primary UI component for user interaction */
export const AssessmentDetails = ({
  issues,
  tags,
  species,
  medias,
  assessmentData,
  publishedDate,
  remoteReport,
  onClose,
  ...props
}: AssessmentDetailsProps) => {
  const formattedDateTime = formatDateTime({ date: publishedDate });

  return (
    <div className="inline-flex h-fit w-[350px] flex-col items-start justify-start gap-6 overflow-hidden rounded-3xl border border-stroke-soft-200 bg-bg-white-0 px-4 py-6">
      <div className="inline-flex items-center justify-between self-stretch">
        {/* This is only an space */}
        <div className="flex items-center justify-center gap-0.5 overflow-hidden rounded-[999px] border border-stroke-soft-200 bg-bg-white-0 p-1.5 opacity-0 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"></div>
        <div className="text-label-lg text-text-strong-950">
          Assessments details
        </div>
        <div className="flex items-center justify-center gap-0.5 overflow-hidden rounded-[999px] border border-stroke-soft-200 bg-bg-white-0 p-1.5 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
          <RiCloseLine className="text-text-sub-600" />
        </div>
      </div>
      <div className="flex h-[108px] flex-col items-start justify-start gap-4 self-stretch">
        <div className="text-label-lg text-text-strong-950">Issues</div>
        <div className="inline-flex flex-wrap items-start justify-start gap-1 self-stretch">
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-verified-light px-2 py-0.5">
            <div className="text-label-xs text-verified-dark">{issues[0]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-verified-light px-2 py-0.5">
            <div className="text-label-xs text-verified-dark">{issues[1]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-verified-light px-2 py-0.5">
            <div className="text-label-xs text-verified-dark">{issues[2]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-verified-light px-2 py-0.5">
            <div className="text-label-xs text-verified-dark">{issues[3]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-verified-light px-2 py-0.5">
            <div className="text-label-xs text-verified-dark">{issues[4]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-verified-light px-2 py-0.5">
            <div className="text-label-xs text-verified-dark">{issues[5]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-verified-light px-2 py-0.5">
            <div className="text-label-xs text-verified-dark">{issues[6]}</div>
          </div>
        </div>
      </div>
      <div className="flex h-[84px] flex-col items-start justify-start gap-4 self-stretch">
        <div className="text-label-lg text-text-strong-950">Tags</div>
        <div className="inline-flex flex-wrap items-start justify-start gap-1 self-stretch">
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light px-2 py-0.5">
            <div className="text-label-xs text-success-dark">{tags[0]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light px-2 py-0.5">
            <div className="text-label-xs text-success-dark">{tags[1]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light px-2 py-0.5">
            <div className="text-label-xs text-success-dark">{tags[2]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light px-2 py-0.5">
            <div className="text-label-xs text-success-dark">{tags[3]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light px-2 py-0.5">
            <div className="text-label-xs text-success-dark">{tags[4]}</div>
          </div>
          <div className="flex w-fit items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light px-2 py-0.5">
            <div className="text-label-xs text-success-dark">{tags[5]}</div>
          </div>
        </div>
      </div>
      <div className="flex h-fit flex-col items-start justify-start gap-4 self-stretch">
        <div className="text-label-lg text-text-strong-950">Medias (3)</div>
        <div className="inline-flex items-start justify-start gap-2 self-stretch overflow-x-scroll">
          <img
            className="h-[194px] w-36 rounded-2xl"
            src="https://picsum.photos/144/194"
          />
          <img
            className="h-[194px] w-36 rounded-2xl"
            src="https://picsum.photos/144/194"
          />
          <img
            className="h-[194px] w-36 rounded-2xl"
            src="https://picsum.photos/144/194"
          />
        </div>
      </div>
      <div className="flex h-[324px] flex-col items-start justify-start gap-4 self-stretch">
        <div className="text-label-lg text-text-strong-950">Species</div>
        <div className="flex h-[284px] flex-col items-start justify-start gap-2 self-stretch">
          <div className="inline-flex items-center justify-start gap-2 self-stretch">
            <img
              className="h-10 w-10 rounded-[43px]"
              src="https://picsum.photos/40/40"
            />
            <div className="inline-flex flex-col items-start justify-center">
              <div className="text-label-md text-text-strong-950">
                Leucaena leucocephala
              </div>
              <div className="inline-flex items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-away-light py-0.5 pl-1 pr-2">
                <RiLeafFill className="h-4 w-4 text-away-base" />
                <div className="text-label-xs text-away-base">Weed</div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <div className="h-[0px] shrink grow basis-0 border border-stroke-soft-200"></div>
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch">
            <img
              className="h-10 w-10 rounded-[43px]"
              src="https://picsum.photos/40/40"
            />
            <div className="inline-flex flex-col items-start justify-center">
              <div className="text-label-md text-text-strong-950">
                Hymenaea courbaril
              </div>
              <div className="inline-flex items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light py-0.5 pl-1 pr-2">
                <RiTreeFill className="h-4 w-4 text-success-base" />
                <div className="text-label-xs text-success-base">Tree</div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <div className="h-[0px] shrink grow basis-0 border border-stroke-soft-200"></div>
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch">
            <img
              className="h-10 w-10 rounded-[43px]"
              src="https://picsum.photos/40/40"
            />
            <div className="inline-flex flex-col items-start justify-center">
              <div className="text-label-md text-text-strong-950">
                Eugenia uniflora
              </div>
              <div className="inline-flex items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-away-light py-0.5 pl-1 pr-2">
                <RiLeafFill className="h-4 w-4 text-away-base" />
                <div className="text-label-xs text-away-base">Weed</div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <div className="h-[0px] shrink grow basis-0 border border-stroke-soft-200"></div>
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch">
            <img
              className="h-10 w-10 rounded-[43px]"
              src="https://picsum.photos/40/40"
            />
            <div className="inline-flex flex-col items-start justify-center">
              <div className="text-label-md text-text-strong-950">
                Syzygium aromaticum
              </div>
              <div className="inline-flex items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light py-0.5 pl-1 pr-2">
                <RiTreeFill className="h-4 w-4 text-success-base" />
                <div className="text-label-xs text-success-base">Tree</div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <div className="h-[0px] shrink grow basis-0 border border-stroke-soft-200"></div>
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch">
            <img
              className="h-10 w-10 rounded-[43px]"
              src="https://picsum.photos/40/40"
            />
            <div className="inline-flex flex-col items-start justify-center">
              <div className="text-label-md text-text-strong-950">
                Inga edulis
              </div>
              <div className="inline-flex items-center justify-center gap-0.5 overflow-hidden rounded-[999px] bg-success-light py-0.5 pl-1 pr-2">
                <RiTreeFill className="h-4 w-4 text-success-base" />
                <div className="text-label-xs text-success-base">Tree</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-28 flex-col items-start justify-start gap-4 self-stretch">
        <div className="text-label-lg text-text-strong-950">Remote Report</div>
        <div className="flex h-[72px] flex-col items-start justify-center gap-4 self-stretch overflow-hidden rounded-xl border border-stroke-soft-200 bg-bg-white-0 py-4 pl-3.5 pr-4">
          <div className="inline-flex items-center justify-start gap-3 self-stretch">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 39.25H10C7.10051 39.25 4.75 36.8995 4.75 34V6C4.75 3.10051 7.10051 0.75 10 0.75H20.5147C21.9071 0.75 23.2425 1.30312 24.227 2.28769L33.7123 11.773C34.6969 12.7575 35.25 14.0929 35.25 15.4853V34C35.25 36.8995 32.8995 39.25 30 39.25Z"
                fill="white"
                stroke="#CACFD8"
                stroke-width="1.5"
              />
              <path
                d="M23 1V9C23 11.2091 24.7909 13 27 13H35"
                stroke="#CACFD8"
                stroke-width="1.5"
              />
              <path
                d="M0 22C0 19.7909 1.79086 18 4 18H24C26.2091 18 28 19.7909 28 22V30C28 32.2091 26.2091 34 24 34H4C1.79086 34 0 32.2091 0 30V22Z"
                fill="#FB3748"
              />
              <path
                d="M3.78906 30V22H6.78906C7.40365 22 7.91927 22.1146 8.33594 22.3437C8.75521 22.5729 9.07161 22.888 9.28516 23.2891C9.5013 23.6875 9.60938 24.1406 9.60938 24.6484C9.60938 25.1615 9.5013 25.6172 9.28516 26.0156C9.06901 26.4141 8.75 26.7279 8.32812 26.957C7.90625 27.1836 7.38672 27.2969 6.76953 27.2969H4.78125V26.1055H6.57422C6.93359 26.1055 7.22786 26.043 7.45703 25.918C7.6862 25.793 7.85547 25.6211 7.96484 25.4023C8.07682 25.1836 8.13281 24.9323 8.13281 24.6484C8.13281 24.3646 8.07682 24.1146 7.96484 23.8984C7.85547 23.6823 7.6849 23.5143 7.45313 23.3945C7.22396 23.2721 6.92839 23.2109 6.56641 23.2109H5.23828V30H3.78906ZM13.7991 30H11.0882V22H13.8538C14.6481 22 15.3304 22.1602 15.9007 22.4805C16.4736 22.7982 16.9137 23.2552 17.221 23.8516C17.5283 24.4479 17.6819 25.1615 17.6819 25.9922C17.6819 26.8255 17.527 27.5417 17.2171 28.1406C16.9098 28.7396 16.4658 29.1992 15.885 29.5195C15.3069 29.8398 14.6116 30 13.7991 30ZM12.5374 28.7461H13.7288C14.2861 28.7461 14.7509 28.6445 15.1233 28.4414C15.4957 28.2357 15.7757 27.9297 15.9632 27.5234C16.1507 27.1146 16.2444 26.6042 16.2444 25.9922C16.2444 25.3802 16.1507 24.8724 15.9632 24.4687C15.7757 24.0625 15.4983 23.7591 15.1311 23.5586C14.7665 23.3555 14.3134 23.2539 13.7718 23.2539H12.5374V28.7461ZM19.2789 30V22H24.4039V23.2148H20.7281V25.3867H24.0523V26.6016H20.7281V30H19.2789Z"
                fill="white"
              />
            </svg>

            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1">
              <div className="self-stretch text-label-sm text-text-strong-950">
                lettuce-com-garden.pdf
              </div>
              <div className="inline-flex items-center justify-start gap-1 self-stretch">
                <div className="flex items-start justify-start gap-1">
                  <div className="text-paragraph-xs text-text-strong-950">
                    1.3MB
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-0.5 overflow-hidden rounded-md p-0.5">
              <div className="relative h-5 w-5 overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-paragraph-xs text-text-sub-600">
        Published on 21/11/24 at 8:51pm
      </div>
    </div>
  );
};
