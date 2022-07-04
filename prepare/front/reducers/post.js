export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "효진",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2018%2F05%2F13%2F16%2F57%2Fdog-3397110__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fko%2Fimages%2Fsearch%2F%25EB%25B0%2598%25EB%25A0%25A4%25EA%25B2%25AC%2F&tbnid=3QX-MdOwu6lKLM&vet=12ahUKEwjhkO68od_4AhUU0IsBHZrjBuoQMygAegUIARCkAQ..i&docid=eHVPKmNuOJVtpM&w=720&h=480&q=%EA%B0%95%EC%95%84%EC%A7%80%20%EB%AC%B4%EB%A3%8C%EC%9D%B4%EB%AF%B8%EC%A7%80&ved=2ahUKEwjhkO68od_4AhUU0IsBHZrjBuoQMygAegUIARCkAQ",
        },
        {
          src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAyMDA5MDdfMTU4%2FMDAxNTk5NDU2NzQ4Njcw.Ne-Cud7kntIIxDfgJsu8s1_cFaikDmj4Qye9RCWVd6wg.ZcWynB9iL81Jpa-TNTNizDKXnDNYTrDmdZghCrV7P-4g.JPEG%2F%25EB%258B%25A4%25EC%259A%25B4%25EB%25A1%259C%25EB%2593%259C.jpg%3Ftype%3Dw1200&imgrefurl=https%3A%2F%2Fpost.naver.com%2Fviewer%2FpostView.naver%3FvolumeNo%3D29428635%26memberNo%3D44820751&tbnid=jkQHmtNaNcVuQM&vet=12ahUKEwjhkO68od_4AhUU0IsBHZrjBuoQMygNegUIARC-AQ..i&docid=3GmUSrOVtU9P-M&w=560&h=385&q=%EA%B0%95%EC%95%84%EC%A7%80%20%EB%AC%B4%EB%A3%8C%EC%9D%B4%EB%AF%B8%EC%A7%80&ved=2ahUKEwjhkO68od_4AhUU0IsBHZrjBuoQMygNegUIARC-AQ",
        },
        {
          src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAxODAzMjlfMjk4%2FMDAxNTIyMzE4MTY4ODg4.TdrChAjiCP9QIdUMkHRQdH9QeUQBZJyRDtdVXEcWxZcg.RTwcJmipl_I19Z0myK-vxgYH-GRjdcXEFymaq4AQTGIg.JPEG%2F%25EB%25AC%25B4%25EB%25A3%258C%25EA%25B0%2595%25EC%2595%2584%25EC%25A7%2580%25EB%25B6%2584%25EC%2596%25919.jpg%3Ftype%3Dw1200&imgrefurl=https%3A%2F%2Fpost.naver.com%2Fviewer%2FpostView.nhn%3FvolumeNo%3D14384336%26memberNo%3D36754980&tbnid=tVAGyqzSTZpT0M&vet=12ahUKEwjhkO68od_4AhUU0IsBHZrjBuoQMygWegUIARDQAQ..i&docid=6DRnZXpFTfq57M&w=1200&h=793&q=%EA%B0%95%EC%95%84%EC%A7%80%20%EB%AC%B4%EB%A3%8C%EC%9D%B4%EB%AF%B8%EC%A7%80&ved=2ahUKEwjhkO68od_4AhUU0IsBHZrjBuoQMygWegUIARDQAQ",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "gregory",
          },
          content: "얼른 사고싶어요~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "효진",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
