import { useEffect, useState } from "react";

import { decrypt, randomLetter } from "../../utils/secretUtils";

const secretText =
  "350d3e0c410c1709234d150a581425010d0054442d1c14065810294d170e5811224d130a1f0520041500"; // Encrypted data to prevent reading it directly from source code

const SecretData = () => {
  const [textMemory, setTextMemory] = useState(""); // Decrypted text in memory
  const [displayText, setDisplayText] = useState(""); // Text that is displayed to the user
  const [showHackedData, setShowHackedData] = useState(false); // Check if we are done "decrypting" and should show the hacked data
  const [buttonDisabled, setButtonDisabled] = useState(false); // Prevent button from being clicked again

  useEffect(() => {
    if (!textMemory) {
      return;
    }

    const textLength = textMemory.length;
    const initialPhasePeriod = 25;

    let initialPhaseCount = 0;
    let finalPhaseCount = 0;
    let isFinalPhase = false;

    let interval = null;
    interval = setInterval(() => {
      let display = "";

      for (let i = 0; i < textLength; i++) {
        if (i <= finalPhaseCount && isFinalPhase) {
          display += textMemory[i];
        } else {
          display += randomLetter();
        }
      }

      setDisplayText(display);

      if (isFinalPhase) {
        finalPhaseCount++;
      } else {
        initialPhaseCount++;
      }

      if (initialPhaseCount >= initialPhasePeriod) {
        isFinalPhase = true;
      }

      if (finalPhaseCount >= textLength) {
        clearInterval(interval);
        setTimeout(() => {
          setShowHackedData(true);
        }, 1000);
      }
    }, 100);
  }, [textMemory]);

  const clickHandler = (e) => {
    setTextMemory(decrypt(secretText));
    setButtonDisabled(true);
  };

  return (
    <>
      <button
        type="button"
        className="bg-slate-600 text-white p-2 rounded-lg hover:bg-red-700 transition disabled:cursor-not-allowed disabled:bg-red-900 disabled:text-gray-500"
        disabled={buttonDisabled}
        onClick={clickHandler}
      >
        Hackear usuario y contraseña
      </button>

      <div className="flex justify-center items-center text-white">
        <p className="text-2xl md:text-6xl break-all px-6 sm:px-12 md:px-24 lg:px-48">
          {displayText}
        </p>
      </div>

      {showHackedData && (
        <img
          className="mb-10 sm:mb-5"
          src="/img/cheese.gif"
          alt="Datos hackeados"
        />
      )}
    </>
  );
};

export default SecretData;
