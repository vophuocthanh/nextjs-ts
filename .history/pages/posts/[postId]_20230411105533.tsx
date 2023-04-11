import { useRouter } from 'next/router'
import React from 'react'

export interface PostDetailsProps {}

export default function PostDetails(props: PostDetailsProps) {
  const router = useRouter()

  return (
    <div>
      <h1>Post Details</h1>
      <p>Query: {JSPN.stringify(router.query)}</p>
    </div>
  )
}
