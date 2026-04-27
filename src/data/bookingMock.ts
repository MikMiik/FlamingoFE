export const bookingRoom = {
  slug: "ib-1526",
  name: "IB 1526 - Flamingo Hải Tiến",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  category: "Căn hộ 1 phòng ngủ · View biển",
  guests: "2 khách",
  nights: 1,
  checkIn: "15/06/2024",
  checkOut: "16/06/2024",
  pricePerNight: "1.650.000đ",
  totalPrice: "1.650.000đ",
} as const;

export const bookingCustomer = {
  fullName: "Nguyễn Văn A",
  phone: "0968 123 456",
  email: "nguyenvana@example.com",
  note: "Vui lòng ưu tiên phòng tầng cao, gần thang máy.",
} as const;

export const bookingRequest = {
  code: "BK-20260427-0012",
  status: "Chờ xác nhận",
  estimatedResponse: "15-30 phút",
  channel: "Xác nhận qua Zalo/Điện thoại",
  createdAt: "27/04/2026 - 18:05",
} as const;

export const bookingTimeline = [
  {
    key: "received",
    title: "Đã tiếp nhận yêu cầu",
    time: "18:05",
    active: true,
    description: "Hệ thống đã ghi nhận yêu cầu đặt phòng của bạn.",
  },
  {
    key: "contacting",
    title: "Đang gọi xác nhận",
    time: "18:12",
    active: true,
    description: "Nhân viên đang liên hệ để xác nhận thông tin lưu trú.",
  },
  {
    key: "hold",
    title: "Đã giữ phòng tạm thời",
    time: "18:20",
    active: false,
    description: "Phòng sẽ được giữ trong 2 giờ sau khi xác nhận thành công.",
  },
] as const;
