export default class {
  constructor() {
    document.title = "Bulletin";
  }
  async getHtml() {
    return `
            <div id="block_content">
            <!-- 회원이 아닐 경우 New 버튼 삭제 -->
            <!-- 해당 글의 작성자일 경우에는 Edit 버튼 표시 -->
            <!-- 캐러셀이 정상적으로 작동하기 위해서는 해당 캐러셀의 id와 밑의 버튼들 data-bs-target의 id들 변경 -->
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-bold">현지 おすすめ 장소</h1>
                    </div>
                </div>
            </section>

            <div class="album pb-5 bg-light">
                <div class="container d-flex flex-row-reverse py-3">
                    <div><a class="btn btn-warning col-0.5 px-4" href="#">New</a></div>
                </div>
                <div class="container">
                    <div class="row g-5">
                        <div class="col-md-4">
                            <a href="/" class="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <div class="card" style="height: 470px">
                                    <div style="height: 300px;">
                                        <img src="./static/image/미야케 우동1.jpg" height="300px" class="img-fluid">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">미야케 우동</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                        <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                                            <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a></div>
                                            <span class="col-9 text-end px-0 align-text-top ">by 규민</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="/" class="text-decoration-none text-dark">
                                <div class="card" style="height: 470px">
                                    <div id="carousel-1" class="carousel slide card-img-top" data-bs-ride="true" style="height: 300px;">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"
                                                aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"
                                                aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"
                                                aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="./static/image//미야케 우동1.jpg" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./static/image//미야케 우동2.jpg" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./static/image//미야케 우동3.jpg" class="d-block w-100" alt="...">
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">미야케 우동</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                        <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                                            <div class="col-3 px-0"></div>
                                            <span class="col-9 text-end px-0 align-text-top ">by other</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="/" class="text-decoration-none text-dark">
                                <div class="card" style="height: 470px">
                                    <div id="carousel-1" class="carousel slide card-img-top" data-bs-ride="true" style="height: 300px;">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"
                                                aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"
                                                aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"
                                                aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="./static/image//미야케 우동1.jpg" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./static/image//미야케 우동2.jpg" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./static/image//미야케 우동3.jpg" class="d-block w-100" alt="...">
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">미야케 우동</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                        <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                                            <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a></div>
                                            <span class="col-9 text-end px-0 align-text-top ">by 규민</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="/" class="text-decoration-none text-dark">
                                <div class="card" style="height: 470px">
                                    <div id="carousel-1" class="carousel slide card-img-top" data-bs-ride="true" style="height: 300px;">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"
                                                aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"
                                                aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"
                                                aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="./static/image/미야케 우동1.jpg" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./static/image/미야케 우동2.jpg" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./static/image/미야케 우동3.jpg" class="d-block w-100" alt="...">
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">미야케 우동</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                        <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                                            <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a></div>
                                            <span class="col-9 text-end px-0 align-text-top ">by 규민</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>




        <!-- modal -->

        <div id="block_modal">
            <div class="modal" id="exampleModal">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">미야케 우동</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-8">
                                        <!-- 이미지 창 -->

                                        <div class="d-flex align-items-center">

                                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                                                        aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                                        aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                                        aria-label="Slide 3"></button>
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="./static/image/미야케 우동1.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="./static/image/미야케 우동2.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="./static/image/미야케 우동3.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 d-flex justify-content-center" style="overflow-y: auto; height: 65vh;">
                                        <!-- 댓글 창 -->
                                        <div id="block_comment" class="col-11">
                                            <span class="mt-5 fs-4">Comment</span>
                                            <div class="row border mt-3 p-1">
                                                <div class="col-12">
                                                        <div class="row">
                                                        <div class="col-5">닉네임</div>
                                                        <div class="col-6">2023-06-01 16:28</div>
                                                        <div class="btn btn-warning col-1 text-center m-0 p-0">❌</div>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-12">우와! 정말 맛집이네요!!</div>
                                                </div>
                                            </div>

                                            <div class="row border mt-3 p-1">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-5">닉네임</div>
                                                        <div class="col-6">2023-06-01 16:28</div>
                                                        <div class="btn btn-warning col-1 text-center m-0 p-0">❌</div>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempora eos natus quidem earum iure hic ipsam libero eius repellat. Laudantium ipsa facere dolor adipisci perspiciatis, voluptatem et amet? Nostrum.</div>
                                                </div>
                                            </div>

                                            <div class="row border mt-3 p-1">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-5">닉네임</div>
                                                        <div class="col-6">2023-06-01 16:28</div>
                                                        <div class="btn btn-warning col-1 text-center m-0 p-0">❌</div>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempora eos natus quidem earum
                                                        iure hic ipsam libero eius repellat. Laudantium ipsa facere dolor adipisci perspiciatis, voluptatem et amet?
                                                        Nostrum.</div>
                                                </div>
                                            </div><div class="row border mt-3 p-1">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-5">닉네임</div>
                                                        <div class="col-6">2023-06-01 16:28</div>
                                                        <div class="btn btn-warning col-1 text-center m-0 p-0">❌</div>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempora eos natus quidem earum
                                                        iure hic ipsam libero eius repellat. Laudantium ipsa facere dolor adipisci perspiciatis, voluptatem et amet?
                                                        Nostrum.</div>
                                                </div>
                                            </div><div class="row border mt-3 p-1">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-5">닉네임</div>
                                                        <div class="col-6">2023-06-01 16:28</div>
                                                        <div class="btn btn-warning col-1 text-center m-0 p-0">❌</div>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempora eos natus quidem earum
                                                        iure hic ipsam libero eius repellat. Laudantium ipsa facere dolor adipisci perspiciatis, voluptatem et amet?
                                                        Nostrum.</div>
                                                </div>
                                            </div>
                                            <div class="row">2</div>
                                            <div class="row">3</div>
                                            <div class="row">4</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- 본문, 댓글작성 창 -->
                                <div class="row">

                                    <!-- 본문 창 -->

                                    <div class="col-8 bg-secondary bg-opacity-50 p-3 rounded-1 d-flex justify-content-between flex-column" style="height: 15vh;">
                                        <span>미야케 우동 가격도 저렴하고 맛있어요</span>
                                        <div class="row d-flex justify-content-end">
                                            <div class="col-6">작성 일자: <span>2023.06.02 00:09</span></div>
                                            <div class="col-3">작성자: <span>김규민</span></div>
                                            <div class="col-3">조회수: <span>0</span></div>
                                        </div>
                                    </div>

                                    <!-- 댓글작성 창 -->

                                    <div class="col-4">
                                        <div class="row mt-3 h-75">
                                            <div class="col-12 d-flex justify-content-end">
                                                <textarea id="modal_commentText" class="form-control"></textarea>
                                                <button id="modal_submitBtn" class="btn btn-primary">작성</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}