const form = document.querySelector(".form-modal");
const form_blocks = document.querySelectorAll(".form-blocks");
const form_block = document.querySelectorAll(".form-block");
const form_block_content = document.querySelectorAll(".form-block-content");
const form_close_btn = document.querySelector(".form-close-btn");
const thank_you_modal = document.querySelector(".thank-you-modal");
const bookmark_btn = document.querySelector(".bookmark-btn");
const radio = document.querySelectorAll('input[type="radio"]');
const dollar_input = document.querySelectorAll('input[type="number"]');
const continue_btn = document.querySelectorAll(".continue-button");
const reward_input = document.querySelectorAll(".reward-input");
const inserted_form = document.querySelectorAll(".form-block-insert");
const select_reward = document.querySelectorAll(".bottom-selected-button");
const got_it_btn = document.querySelector(".got-it-button");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const overlay = document.querySelector(".overlay");
const total_money = document.querySelector(".total-money");
const total_backers = document.getElementById("total-backers");
const input_above_25 = document.getElementById("input2");
const input_above_75 = document.getElementById("input3");
const error_message = document.querySelectorAll(".error-message");
const mobile_nav = document.querySelector(".mobile-navigation");
const menu_btn = document.getElementById("menu-mobile-button");
const close_menu = document.getElementById("close-menu");
//
let total_backers_array = [];
const purple_bar = document.querySelector(".container--2-purplebar");
let max = parseFloat((100.0).toFixed(3));
let current_bar = parseFloat(
  total_money.textContent
    .replace("$", "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "")
    .replace(".", "") / 1000
);
purple_bar.style.width = `${current_bar}%`;
// DOM
form_close_btn.addEventListener("click", () => {
  form.classList.add("hidden");
  overlay.classList.add("hidden");
});

function remove_border() {
  form_block.forEach((block) => {
    block.classList.remove("block-clicked");
  });
}

radio.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    form_block_content.forEach((block, i) => {
      block.addEventListener("click", (e) => {
        for (let j = 0; j < form_block.length; j++) {
          form_block[i].classList.add("block-clicked");
          form_block[j].classList.remove("block-clicked");
        }
        inserted_form.forEach((form, i) => {
          if (e.target.value === "pledge") {
            document.querySelector(".pledge").classList.remove("hidden");
            document.querySelector(".bamboo").classList.add("hidden");
            document.querySelector(".black-edition").classList.add("hidden");
          } //
          else if (e.target.value === "bamboo") {
            document.querySelector(".bamboo").classList.remove("hidden");
            document.querySelector(".black-edition").classList.add("hidden");
            document.querySelector(".pledge").classList.add("hidden");
          } //
          else if (e.target.value === "black-edition") {
            document.querySelector(".black-edition").classList.remove("hidden");
            document.querySelector(".bamboo").classList.add("hidden");
            document.querySelector(".pledge").classList.add("hidden");
          }
        });
      });
    });
  });
});

form_block.forEach((block, i) => {
  block.addEventListener("click", (e) => {
    for (let j = 0; j < form_block.length; j++) {
      form_block[i].classList.add("block-clicked");
      form_block[j].classList.remove("block-clicked");
    }
    inserted_form.forEach((form, i) => {
      if (e.target.id === "block1") {
        document.getElementById("0").checked = true;
        document.querySelector(".pledge").classList.remove("hidden");
        document.querySelector(".bamboo").classList.add("hidden");
        document.querySelector(".black-edition").classList.add("hidden");
      } //
      else if (e.target.id === "block2") {
        document.getElementById("1").checked = true;

        document.querySelector(".bamboo").classList.remove("hidden");
        document.querySelector(".black-edition").classList.add("hidden");
        document.querySelector(".pledge").classList.add("hidden");
      } //
      else if (e.target.id === "block3") {
        document.getElementById("2").checked = true;

        document.querySelector(".black-edition").classList.remove("hidden");
        document.querySelector(".bamboo").classList.add("hidden");
        document.querySelector(".pledge").classList.add("hidden");
      }
    });
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    form.classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    thank_you_modal.classList.add("hidden");
    reward_input.textContent = "";
  }
});

select_reward.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    form.classList.remove("hidden");
    if (btn.id === "bamboo-select-reward") {
      document.getElementById("1").checked = true;
      document.querySelector(".bamboo").classList.remove("hidden");
      document.querySelector(".black-edition").classList.add("hidden");
      document.querySelector(".pledge").classList.add("hidden");
      document.querySelector(".block2-modal").classList.add("block-clicked");
    }
    if (btn.id === "black-edition-select-reward") {
      document.getElementById("2").checked = true;
      document.querySelector(".black-edition").classList.remove("hidden");
      document.querySelector(".bamboo").classList.add("hidden");
      document.querySelector(".pledge").classList.add("hidden");
      document.querySelector(".block3-modal").classList.add("block-clicked");
    }
  });
});

continue_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    form.classList.add("hidden");
    thank_you_modal.classList.remove("hidden");
    reward_input.forEach((input) => {
      if (
        input.value !== "" &&
        input.value !== null &&
        input.value !== undefined &&
        input.value > 0
      ) {
        let parse_backers = parseFloat(total_backers.textContent) + 0.001;
        console.log("parse backers", parse_backers);
        total_backers_array.push(parse_backers.toFixed(3));
        console.log(total_backers_array);
        console.log(total_backers_array.slice(-1));
        total_backers.textContent = parse_backers.toFixed(3);
      }
    });
  });
});

got_it_btn.addEventListener("click", (e) => {
  overlay.classList.add("hidden");
  thank_you_modal.classList.add("hidden");
});

select_reward.forEach((reward_btn) => {
  reward_input.forEach((input) => {
    continue_btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parse_input = input.value ? parseFloat(input.value) : 0;
        const parse_total_money = parseFloat(
          total_money.textContent
            .replace("$", "")
            .replace(",", ".")
            .replace(/[^\d.-]/g, "")
            .replace(".", "")
        );
        const total = parse_total_money + parse_input;
        if (!isNaN(input.value)) {
          total_money.textContent =
            "$" +
            total
              .toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 20,
                useGrouping: true,
              })
              .replace(/(\.|,)0+$/, "");

          let updated_bar = parseFloat(total / 1005);
          purple_bar.style.width = `${updated_bar}%`;
          //
          if (total > 100000) {
            total_money.textContent = "$100,000";
            purple_bar.style.width = "100%";
            document.querySelector(".block1").classList.add("block-deactive");
            document.querySelector(".block2").classList.add("block-deactive");

            select_reward.forEach((reward_btn) => {
              reward_btn.disabled = true;
            });

            reward_btn.addEventListener("mouseenter", () => {
              reward_btn.classList.remove("hover");
            });
            reward_btn.addEventListener("mouseover", () => {
              reward_btn.classList.add("hover");
            });
          }
        }

        input.value = "";
      });
    });
  });
});

// ERROR MESSAGE

continue_btn.forEach((btn) => {
  reward_input.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (e.target.id === "input2") {
        if (input.value < 25) {
          document.querySelector(".above25").classList.remove("hidden");
          continue_btn.forEach((btn) => {
            document.getElementById(
              "bamboo-stand-continue-btn"
            ).disabled = true;
            document.getElementById(
              "bamboo-stand-continue-btn"
            ).style.opacity = 0.4;
          });
        } else {
          document.querySelector(".above25").classList.add("hidden");
          continue_btn.forEach((btn) => {
            document.getElementById(
              "bamboo-stand-continue-btn"
            ).disabled = false;
            document.getElementById(
              "bamboo-stand-continue-btn"
            ).style.opacity = 1;
          });
        }
      }
      //
      if (e.target.id === "input3") {
        if (input.value < 75) {
          document.querySelector(".above75").classList.remove("hidden");
          continue_btn.forEach((btn) => {
            document.getElementById(
              "black-edition-continue-btn"
            ).disabled = true;
            document.getElementById(
              "black-edition-continue-btn"
            ).style.opacity = 0.4;
          });
        } else {
          document.querySelector(".above75").classList.add("hidden");
          continue_btn.forEach((btn) => {
            document.getElementById(
              "black-edition-continue-btn"
            ).disabled = false;
            document.getElementById(
              "black-edition-continue-btn"
            ).style.opacity = 1;
          });
        }
      }
    });
  });
});

menu_btn.addEventListener("click", () => {
  mobile_nav.classList.add("mobile-navigation-active");
  overlay.classList.remove("hidden");
  menu_btn.style.display = "none";
  close_menu.style.display = "block";
});

close_menu.addEventListener("click", () => {
  menu_btn.style.display = "block";
  close_menu.style.display = "none";
  overlay.classList.add("hidden");
  mobile_nav.classList.remove("mobile-navigation-active");
});
