Feature: Hepsiburada - Android

  @ANDROID @ONBOARDING 

  Scenario: Kullanıcı Girişi
    Given Hepsiburada uygulaması açılır
    When Hesabım tıklanır
    And Kullanıcı girişi yapılır
    Then Kullanıcı girişi yapıldığı doğrulanır

  Scenario: Ürün Arama ve Sepete Ekleme
    Given Hepsiburada uygulaması açılır
    When Tüm Kategoriler tıklanır ve "Lenovo" aratılır
    And Fiyat Aralığı filtresi tıklanır ve min 8000 - max 20000 fiyat aralığı uygulanır
    And Listelenen ürünlerden birinin detayına gidilir
    Then "Sepete Ekle" butonunun göründüğü doğrulanır
