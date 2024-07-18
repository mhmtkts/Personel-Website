import { useSelector } from "react-redux";

const Profile = () => {
  const translations = useSelector((state) => state.mode.translations);

  return (
    <div className="flex flex-col p-8">
      <h1 className="text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] mb-8">
        {translations.profile}
      </h1>
      <div className="flex space-x-20">
        <div>
          <h2 className="text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-4">
            {translations.profile}
          </h2>
          <div className="space-y-2">
            <div className="flex">
              <div className="flex-shrink-0 w-48">
                <p className="text-black dark:text-[white] font-semibold text-lg">{translations.birthDate}</p>
              </div>
              <div>
                <p className="text-[#777777] dark:text-[white] text-lg">03.01.1996</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-48">
                <p className="text-black dark:text-[white] font-semibold  text-lg">{translations.city}</p>
              </div>
              <div>
                <p className="text-[#777777] dark:text-[white] text-lg">{translations.izmir}</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-48">
                <p className="text-black dark:text-[white] font-semibold  text-lg">{translations.education}</p>
              </div>
              <div>
                <p className="text-[#777777] dark:text-[white] text-lg">{translations.bio}</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-48">
                <p className="text-black dark:text-[white] font-semibold  text-lg">{translations.preferredRole}</p>
              </div>
              <div>
                <p className="text-[#777777] dark:text-[white] text-lg">Frontend, UI</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-4">
            {translations.aboutMe}
          </h2>
          <p className="text-[#777777] dark:text-[white] text-lg mb-2">
            {translations.aboutMeDetails1}
          </p>
          <p className="text-[#777777] dark:text-[white] text-lg">
            {translations.aboutMeDetails2}
          </p>
        </div>
      </div>
      <div className="border-b-2 border-[#3e3ecf] w-full mt-12 dark:border-[#b8b4e5]"></div>
    </div>
  );
};

export default Profile;
