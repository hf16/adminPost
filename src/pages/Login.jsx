import React from "react";
import "../assets/css/styleku.css";
import Logo from "../assets/img/undraw_Aircraft_re_m05i.png";
import Banner from "../assets/img/undraw_connected_world_wuay.svg";

function Login() {
  return (
    <>
      <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img src={Logo} width="185" alt="logo" />
                        <h4 class="mt-1 mb-5 pb-1">Si Terbang</h4>
                      </div>

                      <form>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example11">
                            Username
                          </label>
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Phone number or email address"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                            placeholder="Enter Your Password"
                          />
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1 ">
                          <button class="btn-login" type="button">
                            Log in
                          </button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button type="button" class="btn-create">
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2 ">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4>Ramah Di kantong, Memudahkan anda</h4>
                      <p>
                        <img src={Banner} alt="" width={350} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
