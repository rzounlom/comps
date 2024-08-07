import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  return (
    <>
      <div>
        <Button primary rounded>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          {" "}
          <GoCloudDownload />
          Secondary
        </Button>
      </div>
      <div>
        <Button warning outline onClick={() => console.log("clicked me")}>
          <GoDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button success outline>
          Success
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Danger
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
