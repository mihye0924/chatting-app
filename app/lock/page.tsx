import LockForm from "@/components/auth/LockForm";
// import { createClientForServer } from "@/utils/supabase/server";

const Lock = async () => {
  return (
    <div className="relative h-[600px] w-[430px] rounded-sm border border-gray-1 bg-lightgray scrollbar-hide">
      <div className="absolute left-1/2 top-1/2 w-[250px] translate-x-[-50%] translate-y-[-55%] transform text-center">
        <LockForm />
      </div>
    </div>
  );
};
export default Lock;
