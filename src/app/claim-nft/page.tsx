"use client"

import { TransactionButton, useActiveAccount } from "thirdweb/react"
import { LoginButton } from "../components/LoginButton"
import { defineChain, getContract } from "thirdweb"
import { claimTo } from "thirdweb/extensions/erc721"
import { client } from "../client"
import Link from "next/link"

export default function NFTClaim(){
    
    const account = useActiveAccount();

    return(
        <div className="min-h-screen font-montserrat flex flex-col items-center justify-center">
        <div className="min-h-3.5 font-montserrat flex flex-col w-80 border rounded-lg items-center justify-center">
            <div className="p-4 flex items-center justify-center flex-col">
                <p className="font-bold text-3xl mb-6">Claim NFT</p>
                <p className="text-white font-semibold">You can claim NFT Here</p>
                <div className="my-6 mb-4">
                    <LoginButton/>
                </div>
                <TransactionButton 
                transaction={()=>claimTo({
                    contract: getContract({
                        client: client,
                        chain: defineChain(656476),
                        address: "0xdFD872193BcD8EB19cf884f5Dd57D7E8B3c4aaD5"
                    }),
                    to: account?.address || "",
                    quantity: 1n,
})}

        onTransactionConfirmed={async()=>{
            alert("NFT claimed")
        }}
        >Claim NFT</TransactionButton>
        <div className="py-10">
        <Link  href={"/gated-content"}>
            <button className="mt-4 bg-zinc-100 text-black px-4 py-2 rounded-md">
                Go To Gated Page
            </button>
        </Link>
            </div>
            </div>
        </div>
        </div>
    )
}