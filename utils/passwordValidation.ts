export const passwordValidate = (password: string) => {
  const passwordLengthRegex = /^.{8,}$/ // At least 8 characters
  const uniqueCharRegex = /[@$!%*?&]/ // At least one unique character
  const numberRegex = /\d/ // At least one number
  const uppercaseRegex = /[A-Z]/ // At least one uppercase letter
  const lowercaseRegex = /[a-z]/ // At least one lowercase letter
  const spaceRegex = /\s/ // No spaces

  if (!passwordLengthRegex.test(password)) {
    return 'Password must be 8 characters or more.'
  }

  if (!uniqueCharRegex.test(password)) {
    return 'Password must contain at least one of the following special characters: @$!%*?&'
  }

  if (!numberRegex.test(password)) {
    return 'Password must contain at least one number.'
  }

  if (!uppercaseRegex.test(password)) {
    return 'Password must contain at least one uppercase letter.'
  }

  if (!lowercaseRegex.test(password)) {
    return 'Password must contain at least one lowercase letter.'
  }

  if (spaceRegex.test(password)) {
    return 'Password must not contain any spaces.'
  }
  return ''
}
