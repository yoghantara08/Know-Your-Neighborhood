package com.lithan.kyn.service;

import java.util.List;

import com.lithan.kyn.entity.Store;
import com.lithan.kyn.model.StoreDto;

public interface StoreService {

  List<Store> listStore();

  Store getStoreById(int storeId);

  StoreDto addStore(StoreDto storeDto);

  Store editStore(StoreDto storeDto);

  List<Store> searchStore(String keyword);
}
