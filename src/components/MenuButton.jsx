import { useRecoilState } from "recoil";
import { sidebarAtom } from "../recoil/atom/sidebarAtom";
import { MenuIcon } from "@heroicons/react/outline";

export default function MenuButton() {
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarAtom);
  return (
    <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
      <button
        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
