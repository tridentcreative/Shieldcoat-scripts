$(document).ready(function() {
  // Initial subheader text
  const initialSubheaderText = $("[element='subheader']").text();

  // Clone initial elements
  const initialTypes = $("[element='type']").clone(true);
  const initialProducts = $("[element='product']").clone(true);

  let selectedCategory; // Store the selected category

  function filterProductsByActiveTypes() {
    $("[element='product']").detach();

    const activeTypes = $("[filter-type].filter-is-active").map(function() {
      return $(this).attr("filter-type");
    }).get();

    initialProducts.each(function() {
      const productType = $(this).attr("filter-type");
      const productCategory = $(this).attr("filter-category");

      if (productCategory === selectedCategory && activeTypes.includes(productType)) {
        $("[element='products']").append($(this).clone(true));
      }
    });
  }

  // Category filter button click event
  $("[element='categories']").find("[element='category']").find(".filter-button").on("click", function() {
    selectedCategory = $(this).attr("filter-category"); // Store the selected category

    // Update subheader text
    $("[element='subheader']").text("Select a product type.");

    // Filter types
    $("[element='type']").detach();
    initialTypes.each(function() {
      const typeCategories = $(this).find("[filter-type-category]");
      let hasMatchingCategory = false;

      typeCategories.each(function() {
        if ($(this).attr("filter-type-category") === selectedCategory) {
          hasMatchingCategory = true;
        }
      });

      if (hasMatchingCategory) {
        $("[element='types']").append($(this).clone(true));
      }
    });

    // Filter products
    $("[element='product']").detach();
    initialProducts.each(function() {
      if ($(this).attr("filter-category") === selectedCategory) {
        $("[element='products']").append($(this).clone(true));
      }
    });
  });

  // Type filter button click event
  $("[element='types']").on("click", ".filter-button", function() {
    // Toggle filter-is-active class
    $(this).toggleClass("filter-is-active");

    // Filter products
    if ($("[filter-type].filter-is-active").length > 0) {
      filterProductsByActiveTypes();
    } else {
      $("[element='product']").detach();
      initialProducts.each(function() {
        if ($(this).attr("filter-category") === selectedCategory) {
          $("[element='products']").append($(this).clone(true));
        }
      });
    }
  });

  // Back button click event
  $("[element='back-button']").on("click", function() {
    // Reset subheader text
    $("[element='subheader']").text(initialSubheaderText);

    // Reset types
    $("[element='type']").detach();
    $("[element='types']").append(initialTypes.clone(true));

    // Remove filter-is-active class from type filter buttons
    $("[filter-type].filter-is-active").removeClass("filter-is-active");

    // Reset products
    $("[element='product']").detach();
    $("[element='products']").append(initialProducts.clone(true));
  });
});



$(".slider-main_component").each(function (index) {
  let loopMode = false;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: true,
    centeredSlides: true,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: "4%",
    rewind: false,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "4%",
        centeredSlides: true,
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "4%",
        centeredSlides: true,
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%",
        centeredSlides: true,
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled"
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active"
  });
});
