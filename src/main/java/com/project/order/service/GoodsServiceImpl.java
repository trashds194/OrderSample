package com.project.order.service;

import com.project.order.dao.Goods;
import com.project.order.repository.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class GoodsServiceImpl implements GoodsService {

    @Autowired
    private GoodsRepository goodsRepository;

    @Override
    public boolean create(Goods goods) {
        goodsRepository.save(goods);
        return true;
    }

    @Override
    public List<Goods> readAll() {
        return goodsRepository.findAll();
    }

    @Override
    public Goods read(int id) {
        return goodsRepository.getById(id);
    }

    @Override
    public boolean update(Goods goods, int id) {
        if (goodsRepository.existsById(id)) {
            goodsRepository.save(goods);
            return true;
        } else return false;
    }

    @Override
    public boolean delete(int id) {
        if (goodsRepository.existsById(id)) {
            goodsRepository.deleteById(id);
            return true;
        } else return false;
    }
}
