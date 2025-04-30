const http = axios.create({
    baseURL: "https://shop.cyberlearn.vn",
    timeout: 30000,
})

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); // ví dụ: ?id=123
}

const productId = getProductIdFromURL();
layDanhSachDetail(productId);

function layDanhSachDetail(productId) {
    http.get(`/api/Product/getbyid?id=${productId}`)
        .then((res) => {
            console.log(res.data.content);
            renderProductDetail(res.data.content);
        })
        .catch((err) => {
            console.log("Lỗi khi lấy chi tiết sản phẩm:", err);
        });
}
layDanhSachDetail(productId);
function renderProductDetail(product) {
    let content = `
    <div class="col detailProducts-left">
        <div class="detailProducts-left-item">
            <img src="${product.image}" alt="${product.name}">
          
        </div>  
       
    </div>
    <div class="col detailProducts-right">
        <div class="detailProducts-title">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Rs:<span>${product.price}$</span></p>
            <p>Color: Black</p>
            <button class="btn-green"></button>
            <button class="btn-blue"></button>
            <button class="btn-red"></button>

            <div class="detailProducts-like">
                <div class="like">
                    <a href="#"><i class="fa-regular fa-heart"></i>Add to wishlist</a>
                    <a href="#"><i class="fa-regular fa-circle-check"></i>View Compare</a>
                    <a href="#"><i class="fa-solid fa-share-from-square"></i>Share</a>
                </div>
                <div class="number">
                    <div class="input-group d-flex w-100">
                        <button class="btn" type="button" onclick="this.nextElementSibling.stepDown()">-</button>
                        <input type="number" class="form-control text-center flex-grow-0" min="1" value="1">
                        <button class="btn" type="button" onclick="this.previousElementSibling.stepUp()">+</button>
                    </div>
                    <div class="btn-number"><button>Add to cart</button></div>
                </div>
                <div class="btn-buy"><button>Buy It Now</button></div>
            </div>

            <div class="detailProducts-ship">
                <p><i class="fa-solid fa-truck"></i> Estimated delivery: 5-7 Days from order date.</p>
                <p><i class="fa-solid fa-envelope-open-text"></i> Free Shipping & Returns: On orders above $79</p>
            </div>

            <div class="row row-cols-4 detailProducts-pay">
                <div class="col">
                    <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" class="img-fluid" />
                </div>
                <div class="col">
                    <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" class="img-fluid" />
                </div>
                <div class="col">
                    <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" class="img-fluid" />
                </div>
                <div class="col">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="MoMo" width="50">
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById("productDetail").innerHTML = content;
}

