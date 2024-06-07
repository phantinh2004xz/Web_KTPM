//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Rau cải thìa ( 1kg )',
            img: './assets/img/products/rau-cu-rau-cai-thia.jpg',
            category: 'Rau củ',
            price: 20000,
            desc: 'Cải thìa còn được gọi là cải chíp, cải muỗng (ở Trung Quốc, CT được gọi là tiểu bạch thái). Cây có tên khoa học là Brassica rapa chinensis, thuộc họ Cải (1). Cây có thân mập, hơi lùn và bẹ lá to, có màu xanh hoặc trắng xanh.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Cải Bắp tím ( 1kg )',
            img: './assets/img/products/rau-cu-bap_tim_nu_hoang.jpg',
            category: 'Rau củ',
            price: 25000,
            desc: 'Bắp cải tím túi 500g đảm bảo rau sạch tươi ngon không dư lượng thuốc trừ sâu an toàn cho sức khỏe. Giá tốt, đúng khối lượng, giao nhanh.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Bắp cải trắng Đà Lạt (1 kg)',
            img: './assets/img/products/rau-cu-Bap-cai-trang-dalat.jpg',
            category: 'Rau củ',
            price: 18000,
            desc: 'Bắp cải trắng Đà Lạt có giá trị dinh dưỡng cao, lượng vitamin nhiều gấp 4,5 lần với cà rốt, 3,6 lần so với khoai tây, hành tây và đặc biệt có thể hạn chế bệnh ung thư nhờ các chất Sulforaphane,…là những chất có tác dụng chống ung thư.'
        },
        {
            id: 4,
            status: 1, title: 'Bí đao hữu cơ ( 1kg )',
            img: './assets/img/products/rau-cu-bi-dao-huu-co.jpg',
            category: 'Rau củ',
            price: 32000,
            desc: 'Cây bí đao thuộc họ bầu bí nó thích hợp với khí hậu nóng ẩm và có tốc độ phát triển khá nhanh dễ dàng thích ứng với nhiều điều kiện khí hậu thời tiết khác nhau đặc biệt là sức đề kháng khả năng chống chịu sâu bệnh cực tốt. Bởi thế mà khi trồng loại cây này ta không cần sử dụng quá nhiều thuốc bảo vệ thực phẩm chính vì thế mà loại quả này được cho là khá an toàn, một loại thực phẩm sạch.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Cà rốt hưu cơ ( 1kg )',
            img: './assets/img/products/rau-cu-ca-rot-huu-co.jpg',
            category: 'Rau củ',
            price: 17000,
            desc: 'Đơn vị 1Kg . Cà rốt là loại cây có củ, củ to ở phần đầu và nhọn ở phần đuôi, củ cà rốt thường có màu cam hoặc đỏ, phẩn ăn được thường gọi là củ nhưng thực chất đó là phần rễ của cà rốt.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Hành lá (1 bó)',
            img: './assets/img/products/rau-cu-hanh-la.jpg',
            category: 'Rau củ',
            price: 14000,
            desc: 'Hành lá là loại gia vị, không thể thiếu trong các bữa ăn hàng ngày.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Khoai lang nhật ( 1 kg )',
            category: 'Rau củ',
            img: './assets/img/products/rau-cu-khoai-lang-nhat.jpg',
            price: 34000,
            desc: 'Khoai lang Nhật chứa nhiều vitamin A, B, C và nhiều khoáng chất cần thiết cho sức khỏe. Đặc biệt thích hợp với người chơi thể thao, người thực hiện chế độ giảm cân, eat clean…'
        },

        {
            id: 8,
            status: 1, 
            title: 'Bắp cải tím ( 1kg )',
            img: './assets/img/products/rau-cu-bap-cai-tim.jpg',
            category: 'Rau củ',
            price: 50000,
            desc: 'Bắp cải tím túi 500g đảm bảo rau sạch tươi ngon không dư lượng thuốc trừ sâu an toàn cho sức khỏe. Giá tốt, đúng khối lượng, giao nhanh.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Trà phô mai kem sữa',
            category: "Nước uống",
            img: './assets/img/products/nuoc-tra-phomai.jpg',
            price: 34000,
            desc: 'Món Nước uống vừa béo ngậy, chua ngọt đủ cả mà vẫn có vị thanh của trà.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Trà đào chanh sả',
            category: "Nước uống",
            img: './assets/img/products/nuoc-tra-dao.jpg',
            price: 25000,
            desc: 'Trà đào chanh sả có vị đậm ngọt thanh của đào, vị chua chua dịu nhẹ của chanh và hương thơm của sả.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Dưa hấu không hạt ( 2,8kg)',
            category: 'Hoa quả',
            img: './assets/img/products/hoa-qua-dua-hau-khong-hat.jpg',
            price: 92000,
            desc: 'Dưa hấu không hạt được lai tạo bằng cách dùng hai quả dưa hấu có gene khác nhau và lai với nhau, kết quả thu được là một quả dưa hấu có các tính chất khác nhưng quả dưa hấu này sẽ vô sinh và không thể sinh sản (tạo ra hạt) được. Bình thường dưa hấu có hai bộ nhiễm sắc thể. Bước đầu tiên trong việc tạo ra dưa hấu không hạt là sử dụng colchicine để nhân đôi số bộ nhiễm sắc thể trong dưa hấu từ hai lên bốn. Sau đó trồng loại dưa hấu có bốn bộ nhiễm sắc thể này xen lẫn với các cây dưa hấu bình thường. Quá trình thụ phấn xen kẽ giữa hai loại dưa hấu này sẽ tạo ra các quả dưa hấu có 3 bộ nhiễm sắc thể và không có hạt.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Dưa hấu sài gòn (3,2kg)',
            img: './assets/img/products/hoa-qua-dua-hau-sai-gon.jpg',
            category: 'Hoa quả',
            price: 45000,
            desc: 'Dưa hấu Sài Gòn già quả - 1 quả khoảng 2,8-3,5kg...'
        },
        {
            id: 13,
            status: 1, 
            title: 'Quả Lê ( 1kg )',
            img: './assets/img/products/hoa-qua-le.jpg',
            category: 'Hoa quả',
            price: 40000,
            desc: 'Lê thanh mát khi mùa hè tới '
        },
        {
            id: 14,
            status: 1, 
            title: 'Vải thiều (1kg)',
            img: './assets/img/products/hoa-qua-vai-thieu.jpg',
            category: 'Hoa quả',
            price: 60000,
            desc: 'Lợi ích kỳ diệu của trái vải có được bởi giá trị dinh dưỡng phong phú của nó. Vải rất giàu vitamin C, chứa khoảng 72mg Vitamin C trên 100mg vải. Trái vải cũng giàu đồng, phốt pho, và có hàm lượng sodium thấp. Nó còn cung cấp các hợp chất vitamin B và là nguồn cung cấp chất xơ tuyệt vời. Loại polyphenol có tên là Oligonol có đặc tính chống oxy hóa và kháng virus.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Táo đỏ ( 1kg )',
            img: './assets/img/products/hoa-qua-tao-do.jpg',
            category: 'Hoa quả',
            price: 99000,
            desc: 'Táo là loại thực phẩm chức năng, giúp ngăn ngừa tổn thương tế bào của cơ thể, hỗ trợ chuyển đổi vitamin, giảm một số bệnh ung thư và bệnh mạn tính. ừ lâu, nhiều người truyền tai câu ngạn ngữ "Ăn một quả táo mỗi ngày giúp tránh mọi bệnh tật" (an apple a day keeps the doctor away). Điều này khiến táo trở thành một trong những loại hoa quả được ưa chuộng nhất thế giới.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Sầu Riêng Ri6 ( 1kg ) ',
            img: './assets/img/products/hoa-qua-sau-rieng.jpg',
            category: 'Hoa quả',
            price: 110000,
            desc: 'Quả có kịch thước từ 2 -3kg . Sầu riêng được nhiều người ở Đông Nam Á xem như là “vua của các loại trái cây”. Trong các loại sầu riêng thì sầu riêng Ri6 là 1 trong các giống được ưu ái lựa chọn nhiều nhất.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Cam tươi ( 1 kg )',
            img: './assets/img/products/hoa-qua-cam-tuoi.jpg',
            category: 'Hoa quả',
            price: 30000,
            desc: 'Quả cam là một loại quả giàu dinh dưỡng và đem đến nhiều lợi ích tuyệt vời cho sức khỏe con người. Những lợi ích mà quả cam đem lại bạn không nên bỏ qua sẽ được chia sẻ ngay bên dưới đây.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Cá trắm đen sạch ( 300g )',
            img: './assets/img/products/tuoi-song-ca-cham-sach.png',
            category: 'Thực phẩm tươi sống',
            price: 29500,
            desc: 'Cá trắm đen sạch ( 300g )'
        },
        {
            id: 19,
            status: 1, 
            title: 'Cá chép sạch ( 2,1kg )',
            img: './assets/img/products/tuoi-song-ca-chep-sach.png',
            category: 'Thực phẩm tươi sống',
            price: 85000,
            desc: 'Cá chép được nuôi trong hồ đảm bảo yếu tố an toàn sạch sẽ.'
        },
        {
            id: 20,
            status: 1, 
            title: 'Cá diên hồng sông Đà ( 1,2kg )',
            img: './assets/img/products/tuoi-song-ca-dien-hong.jpg',
            category: 'Thực phẩm tươi sống',
            price: 130000,
            desc: 'Cá diêu hồng có thịt chắc, dày mình, thịt mềm ngọt, thơm ngon và có ít xương dăm. Cá diêu hồng có thể được chế biến thành các món như diêu hồng chiên giòn, lẩu cá, nấu canh, nấu cháo, cá kho,... Trong thịt cá diêu hồng chứa nhiều thành phần dinh dưỡng như vitamin A, B, D, phốt pho, iốt và giàu protein. Thịt cá rất lành tính, giúp bổ khí huyết, ích tỳ vị, lợi ngũ tạng… rất bổ dưỡng cho người già suy nhược và trẻ em bị suy dinh dưỡng. '
        },
        {
            id: 21,
            status: 1, 
            title: 'Ức gà CP ( 500g )',
            category: 'Thực phẩm tươi sống',
            img: './assets/img/products/tuoi-song-uc-ga.jpg',
            price: 55000,
            desc: 'Ức gà C.P khay 500g tươi ngon, an toàn, đặt mua giao hàng nhanh chóng tại O&F Mart.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Cánh gà CP ( 500g )',
            category: 'Thực phẩm tươi sống',
            img: './assets/img/products/tuoi-song-canh-ga.jpg',
            price: 55000,
            desc: 'Cánh gà C.P khay 500g tươi ngon, an toàn, đặt mua giao hàng nhanh chóng tại O&F Mart'
        },

        {
            id: 23,
            status: 1, 
            title: 'Cá tra sạch ( 500g )',
            category: 'Thực phẩm tươi sống',
            img: './assets/img/products/tuoi-song-ca-tra.jpg',
            price: 55000,
            desc: 'O&F mart đảm bảo nguồn cung cấp uy tín về thực phẩm sạch'
        },

        {
            id: 24,
            status: 1, 
            title: 'Mực tươi ( 500g )',
            img: './assets/img/products/tuoi-song-muc-ong.jpg',
            category: 'Thực phẩm tươi sống',
            price: 150000,
            desc: 'Chúng tôi cung cấp mực ống tươi sạch, đảm bảo chất lượng tốt nhất. Với mực ống tươi ngon bạn có thể chế biến thành nhiều món ăn hấp dẫn như mực xào, mực nướng, hay mực chiên giòn. Xuất xứ: Quy Nhơn – Bình Định'
        },
        {
            id: 25,
            status: 1, 
            title: 'Ngao sạch (  1kg )',
            img: './assets/img/products/tuoi-song-ngao-sach.jpg',
            category: 'Thực phẩm tươi sống',
            price: 350000,
            desc: 'Ngao trắng hay còn gọi  là con nghêu, là một trong những hải sản phổ biến và được chế biến rất nhiều trong các món ăn của Việt Nam. Chúng được nhiều người ưa thích bởi chúng có thể chế biến thành nhiều món ăn độc đáo, hấp dẫn và ngon miệng.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Sườn non CP ( 300g)',
            category: 'Thực phẩm tươi sống',
            img: './assets/img/products/tuoi-song-suon-non.jpg',
            price: 45000,
            desc: 'CP là đối tác tin cậy của O&F Mart chúng tôi để đảm bảo cho quý khách một sản phẩm chất lượng tới bữa ăn của mỗi gia đình.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Thịt bắp lợn ( 300g)',
            category: 'Thực phẩm tươi sống',
            img: './assets/img/products/tuoi-song-thit-lon.jpg',
            price: 32000,
            desc: 'CP là đối tác tin cậy của O&F Mart chúng tôi để đảm bảo cho quý khách một sản phẩm chất lượng tới bữa ăn của mỗi gia đình.'
        },
        {
            id: 28,
            status: 1, 
            title: 'Bơ thực vật Trường An ( hũ 200g)',
            category: 'Bơ sữa',
            img: './assets/img/products/bo-sua-bohop.jpg',
            price: 23000,
            desc: 'Bơ thực vật tốt cho sức khoẻ'
        },

        {
            id: 29,
            status: 1, 
            title: 'Bơ thực vật MEIZAN ( hũ 200g )',
            category: 'Bơ sữa',
            img: './assets/img/products/bo-sua-bomegi.jpg',
            price: 24000,
            desc: 'Bơ thực vật tốt cho sức khoẻ'
        },

        {
            id: 30,
            status: 1, 
            title: 'Lốc sữa Vinamilk ( 4 hộp )',
            category: 'Bơ sữa',
            img: './assets/img/products/bo-sua-suahop-VNM.jpg',
            price: 23500,
            desc: 'Uống sữa mỗi ngày để nâng cao sức khoẻ'
        },

        {
            id: 31,
            status: 1, 
            title: 'Sữa milo ( lốc 4 hộp)',
            category: 'Bơ sữa',
            img: './assets/img/products/bo-sua-suamilo.jpg',
            price: 25000,
            desc: 'Uống milo mỗi ngày để trẻ phát triển chiều cao.'
        },
        {
            id: 32,
            status: 1, 
            title: 'Sữa Grow Plus ( 1 lốc 4 hộp)',
            category: 'Bơ sữa',
            img: './assets/img/products/bo-sua-growplus.jpg',
            price: 26000,
            desc: 'Giúp trẻ phát triển chiều cao'
        },
        {
            id: 33,
            status: 1, 
            title: 'Sữa ông thọ (1 hộp)',
            category: 'Bơ sữa',
            img: './assets/img/products/bo-sua-suaongtho.jpg',
            price: 20000,
            desc: 'Sản phẩm sữa đến từ đàn ông đầu tiên trên thế giới'
        },
        {
            id: 34,
            status: 1, 
            title: 'Cá hồi đông lạnh ( 1kg )',
            category: 'Thực phẩm đông lạnh',
            img: './assets/img/products/dong-lanh-ca-hoi.jpg',
            price: 270000,
            desc: 'Bổ sung nhiều vitamin A B C E, cỉa thiện sức khoẻ'
        },
        {
            id: 35,
            status: 1, 
            title: 'Cá viên CP (500gr)',
            category: 'Thực phẩm đông lạnh',
            img: './assets/img/products/dong-lanh-ca-vien-cp.jpg',
            price: 56000,
            desc: 'CP là đối tác tin cậy của O&F Mart chúng tôi.'
        },
        {
            id: 36,
            status: 1, 
            title: 'Xúc xích CP (500gr)',
            category: 'Thực phẩm đông lạnh',
            img: './assets/img/products/dong-lanh-xx-cp.jpg',
            price: 58000,
            desc: 'CP là đối tác tin cậy của O&F Mart chúng tôi.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Xúc xích đức (500gr)',
            category: 'Thực phẩm đông lạnh',
            img: './assets/img/products/dong-lanh-xx-duc.jpg',
            price: 68000,
            desc: 'xúc xích nhập khẩu đức an toàn cho sức khoẻ.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Nước ép dâu tây',
            img: './assets/img/products/nuoc-dau.jpg',
            category: 'Nước uống',
            price: 100000,
            desc: 'Dâu tây ăn nguyên quả ngon ngọt, có cả quả dôn dốt chua, màu đỏ mọng trông cực yêu. Không chỉ ngon miệng mà đồ uống từ dâu tây còn có công dụng bảo vệ sức khỏe, sáng mắt, đẹp da, thon gọn vóc dáng. Làm giảm nguy cơ mắc bệnh về mỡ máu, chống viêm,…'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Phan Văn Tình",
            phone: "tinh2004",
            password: "123456",
            address: 'https://github.com/phantinh2004xz',
            email: 'tinhp862@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "ADMIN",
            phone: "admin",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();