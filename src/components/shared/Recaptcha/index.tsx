import { useCallback, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import config from "@/utils/config";

type PropsType = {
  onChange: (data: string | null) => void;
  theme?: "light" | "dark";
};

const ReCaptcha = (props: PropsType) => {
  const { onChange, theme } = props;
  const reCaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    resetReCaptcha();
  }, []);

  const resetReCaptcha = useCallback(() => reCaptchaRef.current?.reset(), []);

  return (
    <ReCAPTCHA
      ref={reCaptchaRef}
      theme={theme || "dark"}
      sitekey={`${config.google.recaptchaApiKey}`}
      onChange={onChange} //Do Somthing with Data, like pass it to backend together weith form}
      onExpired={resetReCaptcha}
    />
  );
};

export default ReCaptcha;
