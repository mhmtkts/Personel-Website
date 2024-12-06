import { useSelector } from "react-redux";

const Profile = () => {
  const translations = useSelector((state) => state.mode.translations);

  return (
    <div className="flex flex-col p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] mb-6 md:mb-8">
        {translations.profile}
      </h1>
      
      {/* Main content container */}
      <div className="flex flex-col md:flex-row md:space-x-20 space-y-8 md:space-y-0">
        {/* Profile Details Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-4">
            {translations.profile}
          </h2>
          
          <div className="space-y-4 md:space-y-2">
            {/* Birth Date */}
            <div className="grid grid-cols-1 md:grid-cols-[192px_1fr]">
              <div className="mb-1 md:mb-0">
                <p className="text-black dark:text-[white] font-semibold text-base md:text-lg">
                  {translations.birthDate}
                </p>
              </div>
              <div>
                <p className="text-[#777777] dark:text-[white] text-base md:text-lg">
                  03.01.1996
                </p>
              </div>
            </div>

            {/* City */}
            <div className="grid grid-cols-1 md:grid-cols-[192px_1fr]">
              <div className="mb-1 md:mb-0">
                <p className="text-black dark:text-[white] font-semibold text-base md:text-lg">
                  {translations.city}
                </p>
              </div>
              <div>
                <p className="text-[#777777] dark:text-[white] text-base md:text-lg">
                  {translations.izmir}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="grid grid-cols-1 md:grid-cols-[192px_1fr]">
              <div className="mb-1 md:mb-0">
                <p className="text-black dark:text-[white] font-semibold text-base md:text-lg">
                  {translations.education}
                </p>
              </div>
              <div>
                <p className="text-[#777777] dark:text-[white] text-base md:text-lg whitespace-pre-line">
                  {translations.bio}
                </p>
              </div>
            </div>

            {/* Preferred Role */}
            <div className="grid grid-cols-1 md:grid-cols-[192px_1fr]">
              <div className="mb-1 md:mb-0">
                <p className="text-black dark:text-[white] font-semibold text-base md:text-lg">
                  {translations.preferredRole}
                </p>
              </div>
              <div>
                <p className="text-[#777777] dark:text-[white] text-base md:text-lg">
                  Frontend, UI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-4">
            {translations.aboutMe}
          </h2>
          <p className="text-[#777777] dark:text-[white] text-base md:text-lg mb-4">
            {translations.aboutMeDetails1}
          </p>
          <p className="text-[#777777] dark:text-[white] text-base md:text-lg">
            {translations.aboutMeDetails2}
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-b-2 border-[#3e3ecf] w-full mt-8 md:mt-12 dark:border-[#b8b4e5]"></div>
    </div>
  );
};

export default Profile;
