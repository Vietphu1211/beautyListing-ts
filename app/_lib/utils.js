



export const updateCategoryInURL = (slug) => {
  // const router = useRouter();
  const params = new URLSearchParams(router.query);

  if (category === 'all') {
    params.delete('category'); // Xóa tham số category nếu giá trị là 'all'
  } else {
    params.set('category', slug); // Thiết lập hoặc cập nhật tham số category
  }

  // Tạo URL mới với các tham số đã cập nhật
  const newUrl = `${window.location.pathname}?${params.toString()}`;

  // Chuyển hướng đến URL mới
  router.push(newUrl);
};