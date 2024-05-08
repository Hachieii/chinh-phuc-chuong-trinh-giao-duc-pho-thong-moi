function vanDungCao() {
  return (
    <>
      <img
        alt="Static Badge"
        src="https://img.shields.io/badge/V%E1%BA%ADn%20d%E1%BB%A5ng%20cao-d74726"
      ></img>
    </>
  );
}

function vanDung() {
  return (
    <>
      <img
        alt="Static Badge"
        src="https://img.shields.io/badge/V%E1%BA%ADn%20d%E1%BB%A5ng-ff9b2f"
      ></img>
    </>
  );
}

function thongHieu() {
  return (
    <>
      <img
        alt="Static Badge"
        src="https://img.shields.io/badge/Th%C3%B4ng%20hi%E1%BB%83u-8ac53e"
      ></img>
    </>
  );
}

function nhanBiet() {
  return (
    <>
      <img
        alt="Static Badge"
        src="https://img.shields.io/badge/Nh%E1%BA%ADn%20bi%E1%BA%BFt-4bacd5"
      ></img>
    </>
  );
}

export default function Badge({ difficulty }: { difficulty: string }) {
  switch (difficulty) {
    case "Nhận biết":
      return <>{nhanBiet()}</>;
    case "Thông hiểu":
      return <>{thongHieu()}</>;
    case "Vận dụng":
      return <>{vanDung()}</>;
    case "Vận dụng cao":
      return <>{vanDungCao()}</>;
    default:
      return <>not found</>;
  }
}
