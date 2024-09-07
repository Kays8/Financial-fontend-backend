import { useUser } from "@clerk/clerk-react";
import AddFinancial from "./AddFinancial";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useUser();
  return (
    <div className="max-w-screen-2x1 container mx-auto al:px 24 px-4">
      <div className="text-4xl md:text-3x1 md:leading-snug font-bold my-2">
        Welcome {user?.firstName} ! Here are you financial:
      </div>

      <div className="overflow-x-auto flex mr-4">
        <AddFinancial />
      </div>

      <div> Tatal Monthly: 000 ฿</div>
    </div>
  );
}

export default index;
