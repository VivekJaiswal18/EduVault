import { cookies } from "next/headers";
import { thirdwebAuth } from "../utils/thirdwebAuth";
import { hasAccess } from "../actions/conditions";
import { GatedContent } from "./gatedcontent";
import Link from "next/link";

export default async function GatedPage() {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return <MustLogin />;
  }

  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  console.log({ authResult });
  if (!authResult.valid) {
    return <MustLogin />;
  }

  // If the user has logged in, get their wallet address
  const address = authResult.parsedJWT.sub;
  console.log({ paredResult: authResult.parsedJWT });
  if (!address) throw new Error("could not get wallet address");

  // This is the part that we do the gating condition.
  // If pass -> Allow them to access the page.
  const _hasAccess = await hasAccess(address);
  if (!_hasAccess) return <NotAllowed />;

  // Finally! We can load the gated content for them now
  return <GatedContent />;
}

const MustLogin = () => (
  <div className="text-center">
    You are not logged in. <br />
    <a href="/" className="underline">
      Log in now
    </a>
  </div>
);

const reason = "you do not own any NFT"; 

const NotAllowed = () => (
  <div className="text-center mt-16 justify-center items-center flex-col min-h-screen font-bold font-montserrat mb-6">

    <div className="text-2xl ">
    You are logged in but you do not have access to this page because {reason}
    </div>
    <div className="p-4 flex items-center justify-center mb-3 flex-col">
    <Link  href={"/"}>
            <button className="mt-4 bg-zinc-100 text-black px-4 py-2 rounded-md">
            Go To Login Page
            </button>
        </Link>
        <Link  href={"/claim-nft"}>
            <button className="mt-4 bg-zinc-100 text-black px-4 py-2 rounded-md">
            Go To Claim NFT
            </button>
        </Link>
  </div>
  </div>
);