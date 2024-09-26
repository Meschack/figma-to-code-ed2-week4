'use client'
import LabelInput from '@/components/common/label-input'
import LabelTextarea from '@/components/common/label-textarea'
import classes from '@/lib/classes'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

export function EditProfile({
  toggleEditView
}: {
  toggleEditView: () => void
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const profileFieldFormRef = useRef<HTMLFormElement>(null)
  const [profileImgSrc, setProfileImgSrc] = useState<string>('')
  const [fieldErrors, setFieldErrors] = useState({
    fullName: '',
    loacation: '',
    description: '',
    speciality: '',
    profileImg: ''
  })

  const profileInputFileds = [
    { label: 'Fullname', name: 'full-name' },
    { label: 'Speciality', name: 'speciality' },
    { label: 'Location', name: 'location' }
  ]

  function onChangeProfileImgBtnClick() {
    setFieldErrors(errors => ({ ...errors, profileImg: '' }))
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  function onProfileImgChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const files = ev.target.files
    if (!files || files.length <= 0) {
      return
    }

    const file = files[0]
    if (!file.type.startsWith('image')) {
      setFieldErrors(errors => ({
        ...errors,
        profileImg: 'Please choose an image to continue'
      }))
      return
    }

    const imgSrc = URL.createObjectURL(file)
    setProfileImgSrc(imgSrc)
  }

  function onRemoveProfileImgBtnClick() {
    if (profileImgSrc) {
      URL.revokeObjectURL(profileImgSrc)
      setProfileImgSrc('')
    }
  }

  function onSaveBtnClick() {
    const allFields = profileFieldFormRef.current?.querySelectorAll('*') || []
    const data: Record<string, string> = {}

    for (let r = 0; r < allFields?.length; r++) {
      const currentField = allFields[r]
      const nameValue = currentField.getAttribute('name')
      if (nameValue) {
        const value = currentField.getAttribute('value')
        data[nameValue] = value || ''
      }
    }

    // will add a model to save these infos
    toggleEditView()
  }

  return (
    <div className='flex flex-col gap-6 rounded-xl border-2 p-8'>
      <div>
        <h1>Edit Profile</h1>
        <p className='mt-2 text-gray-500'>
          Your profile will be displayed publicly so be careful what you share
        </p>
      </div>

      <div>
        <h2 className='text-lg font-semibold sm:text-xl'>Cover</h2>
        <div className='mt-1 h-48 w-full rounded-xl bg-slate-200'></div>
      </div>

      <div>
        <h2 className='text-lg font-semibold sm:text-xl'>Profile picture</h2>
        <div className='mt-3 flex items-center gap-5'>
          <div className='size-20 rounded-full bg-slate-300'>
            {profileImgSrc && (
              <Image
                alt='Profile image'
                src={profileImgSrc}
                className='h-full w-full rounded-full'
                width={40}
                height={40}
              />
            )}
          </div>

          <button
            className={`${classes.btnBlue} text-sm`}
            onClick={onChangeProfileImgBtnClick}
          >
            Change photo
          </button>

          <button
            className='text-sm text-blue-950'
            onClick={onRemoveProfileImgBtnClick}
          >
            Remove
          </button>
        </div>
        {fieldErrors.profileImg && (
          <p className='mt-2 text-sm text-red-500'>{fieldErrors.profileImg}</p>
        )}
      </div>

      <form className='flex flex-col gap-5' ref={profileFieldFormRef}>
        {profileInputFileds.map(fieldData => (
          <LabelInput
            key={fieldData.name}
            label={fieldData.label}
            name={fieldData.name}
            placeholder={`Input your ${fieldData.label.toLocaleLowerCase()} here`}
          />
        ))}

        <LabelTextarea
          label='Profile description'
          name='descripton'
          placeholder={'Input your profile description here'}
          rows={7}
        />
      </form>

      <div className='flex justify-end gap-4'>
        <button className={`${classes.btnOutlined}`} onClick={toggleEditView}>
          Cancel
        </button>

        <button className={`${classes.btnBlue}`} onClick={onSaveBtnClick}>
          Save profile
        </button>
      </div>

      <input
        type='file'
        name='profile-img'
        id='profile-img'
        accept='image/*'
        multiple={false}
        className='hidden'
        ref={fileInputRef}
        onChange={onProfileImgChange}
      />
    </div>
  )
}
