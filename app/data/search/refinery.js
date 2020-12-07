function refineUser({ user }, index) {
  if (!user) return false;

  return {
    index: index + 1,
    hasAnonymousProfilePicture: user?.has_anonymous_profile_picture,
    isPrivate: user?.is_private,
    isVerified: user?.is_verified,
    pk: user?.pk,
    profilePicId: user?.profile_pic_id,
    profilePicUrl: user?.profile_pic_url,
    username: user?.username,
    fullName: user?.full_name,
  };
}

export function refineUserList(data) {
  const result = {};
  result.status = data.status;
  result.userList = data.users.map(refineUser).filter((v) => !!v);

  return result;
}
