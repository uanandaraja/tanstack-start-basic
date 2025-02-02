import { Link } from '@tanstack/react-router'
import * as React from 'react'

export function Nav() {
  return (
    <div className="p-2 flex gap-2 text-lg">
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>{' '}
      <Link
        to="/posts"
        activeProps={{
          className: 'font-bold',
        }}
      >
        Posts
      </Link>{' '}
      <Link
        to="/users"
        activeProps={{
          className: 'font-bold',
        }}
      >
        Users
      </Link>{' '}
      <Link
        to="/layout-a"
        activeProps={{
          className: 'font-bold',
        }}
      >
        Layout
      </Link>{' '}
      <Link
        to="/deferred"
        activeProps={{
          className: 'font-bold',
        }}
      >
        Deferred
      </Link>{' '}
      <Link
        // @ts-expect-error
        to="/this-route-does-not-exist"
        activeProps={{
          className: 'font-bold',
        }}
      >
        This Route Does Not Exist
      </Link>
    </div>
  )
} 