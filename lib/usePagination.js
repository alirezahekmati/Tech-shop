export default function usePagination(jsxArray, currentPage, pageSize) {
  const totalElements = jsxArray && jsxArray.length;
  const totalPage = Math.floor(totalElements / pageSize + 1);
  const remainingPage = totalElements % pageSize;
  const elemets = jsxArray && jsxArray.length && jsxArray.reverse();
  const firstElement = currentPage * pageSize - pageSize;
  const lastElement = currentPage * pageSize - 1;

  const filteredElemants =
    elemets &&
    elemets.length &&
    elemets.filter((e, index) => index >= firstElement && index <= lastElement);

  return [filteredElemants, totalPage];
}
