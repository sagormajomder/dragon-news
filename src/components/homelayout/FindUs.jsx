import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
  return (
    <div className="py-5">
      <h2 className="mb-5 font-bold">Find Us On</h2>

      <div className="bg-base-100 border-base-300 text-accent rounded-lg border">
        <ul className="divide-y">
          <li className="border-base-300 hover:bg-base-300 flex cursor-pointer items-center gap-4 p-4">
            <div className="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full">
              <FaFacebookF className="text-blue-600" />
            </div>
            <span className="font-medium">Facebook</span>
          </li>

          <li className="border-base-300 hover:bg-base-300 flex cursor-pointer items-center gap-4 p-4">
            <div className="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full">
              <FaTwitter className="text-sky-400" />
            </div>
            <span className="font-medium">Twitter</span>
          </li>

          <li className="hover:bg-base-300 flex cursor-pointer items-center gap-4 p-4">
            <div className="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full">
              <FaInstagram className="text-pink-500" />
            </div>
            <span className="font-medium">Instagram</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
