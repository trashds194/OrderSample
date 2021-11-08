package com.project.order.service;

import com.project.order.dao.Goods;

import java.util.List;

public interface GoodsService {
    boolean create(Goods goods);

    List<Goods> readAll();

    Goods read(int id);

    boolean update(Goods goods, int id);

    boolean delete(int id);
}
