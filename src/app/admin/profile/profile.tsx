'use client'
import { useState } from 'react'

import { ViewProfile } from './view-profile'
import { EditProfile } from './edit-profile'

export function Profile() {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  function toggleEditView() {
    setIsEditing(!isEditing)
  }

  return isEditing ? (
    <EditProfile toggleEditView={toggleEditView} />
  ) : (
    <ViewProfile toggleEditView={toggleEditView} />
  )
}
