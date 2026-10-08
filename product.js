// ==========================================
    // 2. DỮ LIỆU SẢN PHẨM
    // ==========================================

    const products = {

        // ======================================
        // ID = 1 → phim he
        // ======================================

        1: [

            {
                id: 101,
                name: "AULA WIN60 HE",
                price: 43.90,
                image: "https://www.aulagaming.com/cdn/shop/files/WH_1080x1080px.jpg?v=1784716496",
                review: 1334,
                description: "Bàn phím cơ gaming 60% sử dụng công nghệ Hall Effect, mang đến khả năng tùy chỉnh điểm nhận phím linh hoạt, phản hồi nhanh và độ chính xác cao. Thiết kế nhỏ gọn, phù hợp cho chơi game và sử dụng hằng ngày"
            },

            {
                id: 102,
                name: "AULA Hero 68 HE ",
                price: 54.90,
                image: "https://www.aulagaming.com/cdn/shop/files/h68.png2_WH_850x850px.webp?v=1753169596",
                review: 467,
                description: "Bàn phím gaming 68 phím với switch Hall Effect, thiết kế nhỏ gọn nhưng vẫn giữ các phím chức năng cần thiết. Khả năng tùy chỉnh điểm kích hoạt giúp tăng độ linh hoạt khi chơi game."

            },

            {
                id: 103,
                name: "AULA Hero 75 HE Tri-Mode",
                price: 87.90,
                image: "https://www.aulagaming.com/cdn/shop/files/2_7e849b8e-c5bc-476b-ac63-dc7b821d1acd.png?v=1786691402",
                review: 530,
                description: "Bàn phím cơ 75% cao cấp với công nghệ Hall Effect và kết nối Tri-Mode. Thiết kế cân bằng giữa kích thước, tính năng và khả năng tùy chỉnh, phù hợp cho cả gaming và làm việc."
            },


            {
                id: 104,
                name: "AULA Hero 84 HE",
                price: 69.90,
                image: "https://www.aulagaming.com/cdn/shop/files/84-3_WH_850x850px.webp?v=1753252706",
                review: 153,
                description: "Bàn phím cơ 84 phím sử dụng công nghệ Hall Effect, mang lại phản hồi nhanh và khả năng điều chỉnh điểm nhận phím. Layout tiện dụng, phù hợp cho game thủ cần nhiều phím chức năng hơn."
            },



            {
                id: 105,
                name: "AULA WIN68 HE",
                price: 59.90,
                image: "https://www.aulagaming.com/cdn/shop/files/2_WH_850x850_ce40ac4f-471d-4856-8e21-f508c7a8c7f2.webp?v=1758096276",
                review: 778,
                description: "Bàn phím gaming 68 phím với Hall Effect switch, thiết kế gọn gàng và hiện đại. Khả năng tùy chỉnh điểm kích hoạt giúp bàn phím phản hồi nhanh, phù hợp với các tựa game cần thao tác chính xác."
            },


            {
                id: 106,
                name: "AULA Hero99",
                price: 79.90,
                image: "https://www.aulagaming.com/cdn/shop/files/AULA-HERO99-2.webp?v=1776332758",
                review: 21,
                description: "Bàn phím cơ layout 99 phím dành cho người dùng yêu thích nhiều phím chức năng nhưng vẫn muốn tiết kiệm không gian. Thiết kế gaming hiện đại, phù hợp cho cả chơi game và làm việc."

            }



        ],



        // ======================================
        // ID = 2 → CHuot
        // ======================================

        2: [

            {
                id: 201,
                name: "AULA X9",
                price: 103.90,
                image: "https://www.aulastar.com/uploads/allimg/20260109/1-260109164514911.jpg",
                review: 2339,
                description: "Chuột gaming cao cấp với thiết kế công thái học, mang lại cảm giác cầm thoải mái trong thời gian dài. Độ chính xác cao và khả năng phản hồi nhanh, phù hợp cho gaming cạnh tranh."
            },

            {
                id: 202,
                name: "AULA SC620",
                price: 89.90,
                image: "https://cdn.shopify.com/s/files/1/0695/6987/1965/files/94FA7E8BBCDD7A6A06F3AB2EC8417F0C_WH_1080x1080px_1000x1000.jpg?v=1785230336",
                review: 1500,
                description: "Chuột gaming hiệu năng cao với thiết kế nhẹ và linh hoạt. Cảm biến chính xác cùng khả năng phản hồi nhanh giúp người dùng dễ dàng kiểm soát chuyển động trong các tựa game FPS."
            },

            {
                id: 203,
                name: "AULA SC380 Pro",
                price: 63.90,
                image: "https://www.aulastar.com/uploads/allimg/20250805/1-250P5113534600.JPG",
                review: 1800,
                description: "Chuột gaming nhỏ gọn với thiết kế tối ưu cho tốc độ di chuyển và khả năng kiểm soát. Phù hợp với game thủ cần một mẫu chuột linh hoạt cho FPS và các game tốc độ cao."
            },

            {
                id: 204,
                name: "AULA S12 Pro ",
                price: 79.90,
                image: "https://www.aulastar.com/uploads/allimg/20260803/1-260P310431b25.jpg",
                review: 950,
                description: "Chuột gaming S12 Pro sở hữu thiết kế hiện đại, cảm giác cầm chắc tay và khả năng tracking chính xác. Là lựa chọn phù hợp cho cả chơi game và sử dụng máy tính hằng ngày."
            },
            {
                id: 205,
                name: "AULA SC900 ",
                price: 190.90,
                image: "https://www.aulastar.com/uploads/allimg/20250528/1-25052Q40150H6.jpg",
                review: 104,
                description: "Chuột gaming cao cấp hướng đến hiệu năng và độ chính xác. Thiết kế chắc chắn, cảm biến phản hồi nhanh cùng khả năng kiểm soát tốt, phù hợp cho game thủ yêu cầu cao về thiết bị."
                
            },
            {
                id: 206,
                name: "AULA S11 ",
                price: 93.90,
                image: "https://www.aulastar.com/uploads/allimg/20231018/1-23101Q4442J57.jpg",
                review: 67,
                description: "Chuột gaming với thiết kế hiện đại và công thái học, mang lại cảm giác thoải mái khi sử dụng lâu. Khả năng tracking chính xác giúp đáp ứng tốt nhu cầu gaming và làm việc."
            }

        ],



        // ======================================
        // ID = 3 → phim co
        // ======================================

        3: [

            {
                id: 301,
                name: "AULA F75 MAX",
                price: 159.90,
                image: "https://www.aulastar.com/uploads/allimg/20250718/1-250GQ4240I29.jpg",
                review: 667,
                description: "Bàn phím cơ gaming cao cấp layout 75%, mang đến đầy đủ các phím chức năng trong kích thước gọn gàng. Thiết kế chắc chắn, phù hợp cho game thủ và người dùng cần trải nghiệm gõ phím cao cấp."
            },

            {
                id: 302,
                name: "AULA S75 Pro",
                price: 119.90,
                image: "https://www.aulastar.com/uploads/allimg/20250725/1-250H51H514926.JPG",
                review: 984,
                description: "Bàn phím cơ 75% với thiết kế hiện đại và layout tối ưu không gian. Cảm giác gõ ổn định, phản hồi tốt, phù hợp cho cả gaming, học tập và làm việc."
            },

            {
                id: 303,
                name: "AULA S99 ",
                price: 109.90,
                image: "https://www.aulastar.com/uploads/allimg/20250117/1-25011GG413932.jpg",
                review: 500,
                description: "Bàn phím cơ layout 99% cung cấp nhiều phím chức năng trong thiết kế tiết kiệm diện tích. Phù hợp cho người dùng muốn một bàn phím đầy đủ chức năng nhưng vẫn gọn gàng."
            },

            {
                id: 304,
                name: "AULA F2183",
                price: 129.90,
                image: "https://www.aulastar.com/uploads/allimg/20231107/1-23110GT94K40.jpg",
                review: 310,
                description: "Bàn phím cơ gaming kích thước lớn với thiết kế nổi bật và nhiều phím chức năng. Mang lại trải nghiệm sử dụng ổn định, phù hợp cho gaming, làm việc và setup máy tính."
            },

            {
                id: 305,
                name: "AULA F3032 ",
                price: 139.90,
                image: "https://www.aulastar.com/uploads/allimg/20231018/1-23101Q000235K.jpg",
                review: 540,
                description: "Bàn phím cơ gaming với thiết kế hiện đại, kích thước lớn và đầy đủ phím chức năng. Phù hợp cho người dùng thường xuyên chơi game, làm việc và nhập liệu."
            },

            {
                id: 306,
                name: "AULA-LEOBOG AMG65",
                price: 179.90,
                image: "https://www.aulastar.com/uploads/allimg/20250217/1-25021G0455R18.jpg",
                review: 220,
                description: "Bàn phím cơ gaming cao cấp được phát triển cùng LEOBOG, sở hữu thiết kế 65% nhỏ gọn và phong cách mạnh mẽ. Mang đến trải nghiệm gõ phím ổn định, phù hợp cho gaming và setup cá nhân."
            },

        ],



        // ======================================
        // ID = 4 → tai nghe
        // ======================================

        4: [

            {
                id: 401,
                name: "AULA S605",
                price: 249.90,
                image: "https://www.aulastar.com/uploads/allimg/20231106/1-231106103126421.JPG",
                review: 320,
                description: "Tai nghe gaming với thiết kế chụp tai thoải mái, mang đến âm thanh rõ ràng và khả năng tái tạo hiệu ứng trong game tốt. Phù hợp cho gaming, nghe nhạc và giải trí."
            },

            {
                id: 402,
                name: "AULA S6",
                price: 209.90,
                image: "https://www.aulastar.com/uploads/allimg/20240223/1-240223144002602.PNG",
                review: 1229,
                description: "Tai nghe gaming được thiết kế hướng đến sự thoải mái khi sử dụng lâu. Âm thanh cân bằng, giọng nói rõ ràng và phù hợp với nhiều nhu cầu từ chơi game đến giải trí."
            },

            {
                id: 403,
                name: "AULA G7",
                price: 259.90,
                image: "https://www.aulastar.com/uploads/allimg/20250702/1-250F21R55c39.jpg",
                review: 341,
                description: "Tai nghe gaming G7 sở hữu thiết kế hiện đại và âm thanh mạnh mẽ. Khả năng tái tạo âm thanh chi tiết giúp người dùng dễ dàng nhận biết hiệu ứng và âm thanh trong game."
                
            },

            {
                id: 404,
                name: "AULA S608",
                price: 250.90,
                image: "https://www.aulastar.com/uploads/allimg/20231106/1-231106105433212.jpg",
                review: 662,
                description: "Tai nghe gaming S608 mang đến trải nghiệm âm thanh sống động cùng thiết kế chụp tai thoải mái. Phù hợp cho chơi game, xem phim và nghe nhạc trong thời gian dài."
            },

            {
                id: 405,
                name: "AULA S606",
                price: 249.90,
                image: "https://www.aulastar.com/uploads/allimg/20231201/1-23120116150JW.jpg",
                review: 879,
                description: "Tai nghe gaming S606 với thiết kế hiện đại, đệm tai êm ái và âm thanh rõ ràng. Sản phẩm phù hợp cho game thủ cần một chiếc tai nghe thoải mái để sử dụng hằng ngày."
            },

            {
                id: 406,
                name: "AULA S8",
                price: 249.90,
                image: "https://www.aulastar.com/uploads/allimg/20240624/1-240624112252O1.png",
                review: 327,
                description: "Tai nghe gaming AULA S8 sở hữu thiết kế mạnh mẽ và khả năng tái tạo âm thanh rõ nét. Mang lại trải nghiệm tốt khi chơi game, xem phim và nghe nhạc."
            },

        ]

    };

