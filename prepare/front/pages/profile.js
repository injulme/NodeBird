import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";
const Profile = () => {
  const followingList = [
    { nickname: "111" },
    { nickname: "222" },
    { nickname: "333" },
  ];
  const followerList = [
    { nickname: "aaa" },
    { nickname: "bbb" },
    { nickname: "ccc" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
