import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
  } from "next"
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"
import React from "react"
  
  export default function SignIn({
    providers,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
      <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    )
  }
  
  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, options)
  
    // If the user is already logged in, redirect.
    if (session) {
      return { redirect: { destination: "/" } }
    }
  
    const providers = await getProviders()
  
    return {
      props: { providers: providers ?? [] },
    }
  }