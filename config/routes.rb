Rails.application.routes.draw do
  controller :main do
    get "page1"
    get "page2"
    get "page3"
    get "page4"
  end

  root to: "main#page1"
end
