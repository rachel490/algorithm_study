function solution(record) {
  const nickObj = {};
  const answer = [];

  record.map((item) => {
    const [controller, id, nickname] = item.split(" ");
    if (controller !== "Leave") {
      nickObj[id] = nickname;
    }
  });

  record.map((item) => {
    const [controller, id, nickname] = item.split(" ");

    switch (controller) {
      case "Enter":
        answer.push(`${nickObj[id]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${nickObj[id]}님이 나갔습니다.`);
        break;
      case "Change":
        break;
    }
  });

  return answer;
}
