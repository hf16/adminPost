import React from "react";
import Logo from "../assets/img/undraw_Aircraft_re_m05i.png";
import Banner from "../assets/img/undraw_connected_world_wuay.svg";
import "../assets/css/styleku.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <>
      <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black card-phone-xs">
                <div class="row g-0">
                  <div class="col-lg-6 card-phone-xs">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img src={Logo} width="185" alt="logo" />
                        <h4 class="mt-1 mb-5 pb-1">Si Terbang</h4>
                      </div>

                      <form>
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control input-login"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control input-login"
                            placeholder="Email"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            class="form-control input-login"
                            placeholder="Password"
                          />
                        </div>
                        <div class="text-center pt-1 mb-5 pb-1 ">
                          <button class="btn-login" type="button">
                            Register
                          </button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Have already an account?</p>
                          <button
                            type="button"
                            class="btn-create"
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2 card-phone">
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

export default Register;
